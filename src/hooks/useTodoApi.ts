import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from '../services/todo.service';
import type { CreateTodoDto, UpdateTodoDto } from '../types/api.types';
import { getErrorMessage } from '../lib/errorHandler';

export const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: string) => [...todoKeys.details(), id] as const,
};

export const useTodos = () => {
  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: todoApi.getTodos,
    staleTime: 1000 * 60 * 5,
  });
};

export const useTodo = (id: string) => {
  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: () => todoApi.getTodo(id),
    enabled: !!id,
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTodoDto) => todoApi.createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      console.error('Failed to create todo:', message);
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTodoDto }) =>
      todoApi.updateTodo(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: todoKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      console.error('Failed to update todo:', message);
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => todoApi.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() });
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      console.error('Failed to delete todo:', message);
    },
  });
};

export const useCompletedTodos = () => {
  return useQuery({
    queryKey: [...todoKeys.all, 'completed'] as const,
    queryFn: todoApi.getCompletedTodos,
    staleTime: 1000 * 60 * 5,
  });
};

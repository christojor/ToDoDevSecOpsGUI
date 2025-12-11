import apiClient from '../lib/axios';
import type { Todo, CreateTodoDto, UpdateTodoDto } from '../types/api.types';

export const todoApi = {
  getTodos: async (): Promise<Todo[]> => {
    try {
      const response = await apiClient.get<Todo[]>('/todoitems');
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  },

  getTodo: async (id: string): Promise<Todo> => {
    const response = await apiClient.get<Todo>(`/todoitems/${id}`);
    return response.data;
  },

  createTodo: async (data: CreateTodoDto): Promise<Todo> => {
    const response = await apiClient.post<Todo>('/todoitems', data);
    return response.data;
  },

  updateTodo: async (id: string, data: UpdateTodoDto): Promise<Todo> => {
    const response = await apiClient.put<Todo>(`/todoitems/${id}`, data);
    return response.data;
  },

  deleteTodo: async (id: string): Promise<void> => {
    await apiClient.delete(`/todoitems/${id}`);
  },

  getCompletedTodos: async (): Promise<Todo[]> => {
    try {
      const response = await apiClient.get<Todo[]>('/todoitems/complete');
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching completed todos:', error);
      throw error;
    }
  },
};

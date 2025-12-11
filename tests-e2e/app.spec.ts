import { test, expect } from '@playwright/test';

test('Can navigate between all pages and show correct content', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main h2').first()).toContainText('Welcome to DevSecOps ToDo App');
  await expect(page).toHaveURL('/');
  await page.click('a[href="/todos"]');
  await expect(page.locator('main h1')).toContainText('Todo List');
  await expect(page).toHaveURL('/todos');
  await page.click('a[href="/about"]');
  await expect(page.locator('main h1')).toContainText('About This App');
  await expect(page).toHaveURL('/about');
  await page.click('a[href="/"]');
  await expect(page).toHaveURL('/');
});

test('Can highlight active navigation link', async ({ page }) => {
  await page.goto('/');
  const homeLink = page.locator('a[href="/"]').first();
  await expect(homeLink).toHaveClass(/bg-blue-500/);
  await page.click('a[href="/todos"]');
  const todosLink = page.locator('a[href="/todos"]');
  await expect(todosLink).toHaveClass(/bg-blue-500/);
});

test('Has correct page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/DevSecOps ToDo App/);
});

test('Has proper heading hierarchy on all pages', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h2').first()).toBeVisible();
  await expect(page.locator('h3').first()).toBeVisible();
  await page.goto('/todos');
  await expect(page.locator('main h1')).toBeVisible();
  await page.goto('/about');
  await expect(page.locator('main h1')).toBeVisible();
  await expect(page.locator('main h2').first()).toBeVisible();
});


test('Can display navigation correctly on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  const navbar = page.locator('nav');
  await expect(navbar).toBeVisible();
  await expect(page.locator('a[href="/"]').first()).toBeVisible();
  await expect(page.locator('a[href="/todos"]')).toBeVisible();
  await expect(page.locator('a[href="/about"]')).toBeVisible();
});

test('Maintains active link on resize', async ({ page }) => {
  await page.goto('/todos');
  
  // Desktop
  await page.setViewportSize({ width: 1280, height: 720 });
  const todosLinkDesktop = page.locator('a[href="/todos"]');
  await expect(todosLinkDesktop).toHaveClass(/bg-blue-500/);
  
  // Mobile
  await page.setViewportSize({ width: 375, height: 667 });
  const todosLinkMobile = page.locator('a[href="/todos"]');
  await expect(todosLinkMobile).toHaveClass(/bg-blue-500/);
});

test('Displays error message on Todos page when backend is unavailable', async ({ page }) => {
  await page.goto('/todos');
  const errorHeading = page.locator('h2', { hasText: 'Error Loading Todos' });
  await expect(errorHeading).toBeVisible({ timeout: 15000 });
});

test('Shows Network Error details when backend is unavailable', async ({ page }) => {
  await page.goto('/todos');
  await expect(page.locator('text=Error Loading Todos')).toBeVisible({ timeout: 15000 });
  await expect(page.locator('text=Network Error')).toBeVisible();
  const apiUrlText = page.locator('code');
  await expect(apiUrlText).toBeVisible();
});

test('Displays Home page content correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main h2').first()).toContainText('Welcome to DevSecOps ToDo App');
  await expect(page.locator('text=A task management application built with the latest web technologies')).toBeVisible();
  await expect(page.locator('h3', { hasText: 'What is this app?' })).toBeVisible();
  await expect(page.locator('h3', { hasText: 'Key Features' })).toBeVisible();
  await expect(page.locator('text=Create, complete, and delete tasks')).toBeVisible();
});

test('Displays About page technology stack', async ({ page }) => {
  await page.goto('/about');
  await expect(page.locator('main h1')).toContainText('About This App');
  await expect(page.locator('h2', { hasText: 'Technology Stack' })).toBeVisible();
  await expect(page.locator('strong', { hasText: 'React 19' })).toBeVisible();
  await expect(page.locator('strong', { hasText: 'TypeScript' })).toBeVisible();
  await expect(page.locator('strong', { hasText: 'Vite' })).toBeVisible();
  await expect(page.locator('strong', { hasText: 'React Router' })).toBeVisible();
  await expect(page.locator('strong', { hasText: 'Tailwind CSS' })).toBeVisible();
  await expect(page.locator('strong', { hasText: 'TanStack Query' })).toBeVisible();
});

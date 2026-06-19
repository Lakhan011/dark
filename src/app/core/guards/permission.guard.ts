import { inject } from '@angular/core';
import { Router, CanActivateFn, CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const permissionGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Get the required permissions from the route data
  const requiredPermissions = route.data?.['permissions'] as string[];

  // If no specific permissions are required for this route, allow access
  if (!requiredPermissions || requiredPermissions.length === 0) {
    return true;
  }

  // Check if the user possesses the required permissions
  if (authService.hasPermission(requiredPermissions)) {
    return true;
  }

  // User doesn't have permission, redirect them to unauthorized or dashboard
  // For now we redirect to the dashboard root. Alternatively, you could route to an "unauthorized" page.
  router.navigate(['/']);
  return false;
};

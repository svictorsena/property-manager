import { AuthService } from '@/services/auth-service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const tenantGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService)
  return await authService.isAuthenticated() && !await authService.isOwner();
};

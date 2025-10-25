import { AuthService } from '@/services/auth/auth-service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const ownerGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService)
  return await auth.isAuthenticated() && await auth.isOwner();
};

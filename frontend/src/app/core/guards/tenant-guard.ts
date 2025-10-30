import { AuthService } from '@/core/services/auth-service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RedirectCommand, Router, RouterStateSnapshot } from '@angular/router';

export const tenantGuard: CanActivateFn = async (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const isAuthenticated = await authService.isAuthenticated();
    const isOwner = await authService.isOwner();

    if (!isAuthenticated || isOwner) {
        const loginPath = router.parseUrl('/not-authorized');
        return new RedirectCommand(loginPath, {
            skipLocationChange: true,
        });
    }

    return true;
};

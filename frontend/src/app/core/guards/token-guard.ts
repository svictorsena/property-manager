import { AuthService } from '@/core/services/auth-service';
import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

export const tokenGuard: CanActivateFn = async (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const token: string = route.queryParams['token'];
    const isTokenValid = await authService.validateToken(token);

    if (isTokenValid === false) {
        const loginPath = router.parseUrl('/not-authorized');
        return new RedirectCommand(loginPath, {
            skipLocationChange: true,
        });
    }
    return isTokenValid;
};

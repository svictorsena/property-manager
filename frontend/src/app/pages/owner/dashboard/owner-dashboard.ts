import { AuthService } from '@/services/auth-service';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-owner-dashboard',
    imports: [],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    authService = inject(AuthService);
}

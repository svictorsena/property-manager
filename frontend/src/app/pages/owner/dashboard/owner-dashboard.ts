import { AuthService } from '@/services/auth/auth-service';
import { Component, effect, inject, signal } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-owner-dashboard',
    imports: [],
    templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
    authService = inject(AuthService);
}

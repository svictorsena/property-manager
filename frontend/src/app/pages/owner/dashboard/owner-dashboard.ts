import { AuthService } from '@/services/auth/auth-service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-owner-dashboard',
  imports: [],
  templateUrl: './owner-dashboard.html',
})
export class OwnerDashboard {
  auth = inject(AuthService)
}

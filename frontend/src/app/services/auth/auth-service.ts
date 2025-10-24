import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api-service';

interface User {
  id: number | string
  username: string
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api = inject(ApiService)

  getUser() {
    return this.api.get<User>("me", ["me"])
  }

  isAdmin(): boolean {
    return this.getUser().data()?.role === 'ADMIN';
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }
}

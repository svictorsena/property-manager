import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api/api-service';

@Injectable({
    providedIn: 'root',
})
export class TenantService {
    private readonly api = inject(ApiService);

    register(data: any) {
      return this.api.post("tenants", data)
    }
}

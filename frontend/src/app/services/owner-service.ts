import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly api = inject(ApiService);

    register(data: any) {
        return this.api.post('owner/register-tenant', data);
    }
}

import { firstValueFrom } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';

interface IToken {
    token: string,
    expireAt: string
}

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly api = inject(ApiService);

    register(data: any) {
        return this.api.post('owner/register-tenant', data);
    }

    async createInvite(): Promise<IToken> {
        return await firstValueFrom(this.api.post('invite-token'))
    }
}

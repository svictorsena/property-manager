import { firstValueFrom, lastValueFrom } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToken, IPage, ITotalTenants } from '@owner/interfaces';

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly http = inject(HttpClient);

    getTenants(currentPage: number, search: string): Promise<IPage> {
        return lastValueFrom(
            this.http.get<IPage>('owner/tenants', {
                params: { page: currentPage - 1, search: search },
            })
        );
    }

    getTotalTenants(): Promise<ITotalTenants> {
        return firstValueFrom(this.http.get<ITotalTenants>('owner/tenants/total'));
    }

    async createInvite(): Promise<IToken> {
        return await firstValueFrom(this.http.post<IToken>('invite-token', null));
    }
}

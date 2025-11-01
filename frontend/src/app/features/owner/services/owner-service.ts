import { firstValueFrom, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToken, IPage } from '@owner/interfaces';

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly http = inject(HttpClient);

    getTenants(currentPage: number): Observable<IPage> {
        return this.http.get<IPage>('owner/tenants', { params: { page: currentPage - 1 } });
    }

    async createInvite(): Promise<IToken> {
        return await firstValueFrom(this.http.post<IToken>('invite-token', null));
    }
}

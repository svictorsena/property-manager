import { firstValueFrom, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../interfaces/IToken';
import { ITenant } from '../interfaces/ITenant';


@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly http = inject(HttpClient);

    getTenants(): Observable<ITenant[]> {
        return this.http.get<ITenant[]>('owner/tenants')
    }

    async createInvite(): Promise<IToken> {
        return await firstValueFrom(this.http.post<IToken>('invite-token', {}));
    }
}

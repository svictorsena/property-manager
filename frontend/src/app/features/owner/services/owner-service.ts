import { firstValueFrom, lastValueFrom } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    IToken,
    IPage,
    ITotalTenants,
    ITenant,
    IProperties,
    ITotalProperties,
} from '@owner/interfaces';

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    private readonly http = inject(HttpClient);

    getTenants(currentPage: number, search: string): Promise<IPage<ITenant>> {
        return lastValueFrom(
            this.http.get<IPage<ITenant>>('owner/tenants', {
                params: { page: currentPage - 1, search: search },
            })
        );
    }

    getTotalTenants(): Promise<ITotalTenants> {
        return firstValueFrom(this.http.get<ITotalTenants>('owner/tenants/total'));
    }

    addProperty(data: any) {
        this.http.post('property', data).subscribe((res) => console.log(res));
    }

    getProperties(currentPage: number, identifier: string): Promise<IPage<IProperties>> {
        return lastValueFrom(
            this.http.get<IPage<IProperties>>('property', {
                params: { page: currentPage - 1, identifier: identifier },
            })
        );
    }

    getTotalProperties(): Promise<ITotalProperties> {
        return firstValueFrom(this.http.get<ITotalProperties>('property/total'));
    }

    async createInvite(): Promise<IToken> {
        return await firstValueFrom(this.http.post<IToken>('invite-token', null));
    }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/api';

    get<T>(url: string, key: any[], params?: Record<string, string | number | boolean>) {
        const httpParams = params ? new HttpParams({ fromObject: params }) : undefined;

        return injectQuery(() => ({
            queryKey: key,
            queryFn: () =>
                firstValueFrom(this.http.get<T>(`${this.baseUrl}/${url}`, {
                    params: httpParams,
                })),
        }));
    }
}

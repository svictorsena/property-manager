import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/api';

    get<T>(url: string, params?: Record<string, string | number | boolean>) {
        const httpParams = params ? new HttpParams({ fromObject: params }) : undefined;
        return firstValueFrom(
            this.http.get<T>(`${this.baseUrl}/${url}`, {
                params: httpParams,
                withCredentials: true,
            })
        );
    }

    post(url: string, data: any) {
        return firstValueFrom(
            this.http.post(`${this.baseUrl}/${url}`, data, {
                withCredentials: true,
            })
        );
    }
}

// to quase desistindo desse api service

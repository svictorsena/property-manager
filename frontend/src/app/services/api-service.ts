import { ApiOptions } from '@/types/apiOptions';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = 'http://localhost:8080/api';

    private readonly defaultHttpOptions = {
        withCredentials: true,
        observe: 'body' as const
    };

    get<T>(url: string, options: ApiOptions = {}): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${url}`, {
            ...this.defaultHttpOptions,
            ...options,
        });
    }

    post<T>(url: string, body: any, options: ApiOptions = {}): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}/${url}`, body, {
            ...this.defaultHttpOptions,
            ...options,
        });
    }

    put<T>(url: string, body: any, options: ApiOptions = {}): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${url}`, body, {
            ...this.defaultHttpOptions,
            ...options,
        });
    }

    delete<T>(url: string, options: ApiOptions = {}): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}/${url}`, {
            ...this.defaultHttpOptions,
            ...options,
        });
    }
}
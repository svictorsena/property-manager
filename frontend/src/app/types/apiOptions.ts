import { HttpHeaders, HttpParams } from "@angular/common/http";

export type ApiOptions = {
    headers?: { [header: string]: string | string[] } | HttpHeaders;
    params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[] };
    reportProgress?: boolean;
};


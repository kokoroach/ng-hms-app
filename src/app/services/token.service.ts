// NOTE: Token service taken from:
// https://stackoverflow.com/questions/72842974/inject-ngx-cookie-service-in-injectable

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// 3rd party library
import {CookieService} from 'ngx-cookie-service';


const TOKEN_KEY = 'auth-token';


@Injectable({
    providedIn: 'root'
})
export class TokenStorageService extends CookieService {
    constructor(@Inject(DOCUMENT) private _document: any,
                @Inject(PLATFORM_ID) private _platformId: any) { 
        super(_document, _platformId);
    }

    public deleteToken(): void{
        this.delete(TOKEN_KEY);
    }

    public saveToken(token: string): void{
        this.delete(TOKEN_KEY);
        this.set(TOKEN_KEY, token);
    }

    public getToken(): any {
        return this.get(TOKEN_KEY);
    }
}
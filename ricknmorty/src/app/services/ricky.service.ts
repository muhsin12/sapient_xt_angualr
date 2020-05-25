import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})
export class RickyService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('https://rickandmortyapi.com/api/character/');
    }
}
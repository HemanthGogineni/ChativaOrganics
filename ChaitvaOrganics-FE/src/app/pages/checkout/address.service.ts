import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    constructor(private http: HttpClient) { }

    // Get all countries
    getCountries(): Observable<any> {
        return this.http.get('https://restcountries.com/v3.1/all');
    }

    // Get states by country
    getStates(country: string): Observable<any> {
        return this.http.post('https://countriesnow.space/api/v0.1/countries/states', {
            country: country
        });
    }

    // Get city/state from pincode (India only)
    getAddressFromPincode(pincode: string): Observable<any> {
        return this.http.get(`https://api.postalpincode.in/pincode/${pincode}`);
    }
}

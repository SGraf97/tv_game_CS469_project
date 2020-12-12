import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ExampleService {
    private hostURI: string;

    constructor(private http: HttpClient) {
        this.hostURI = environment.host;
    }

    public sendMessageToClients(test1, test2) {
        console.log('ekei');

        return this.http.post(`${this.hostURI}/api/example/sendMessageToClients`,
        {
            message: {
                test1: test1,
                test2: test2
            },
            event: "testing"
        })

    }
}
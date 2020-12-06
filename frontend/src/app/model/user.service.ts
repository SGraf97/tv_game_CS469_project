import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

    private hostURl: string;

    constructor(private http: HttpClient) {
      this.hostURl = environment.host;
    }
  
    public getAll(): Observable<User[]> {
      return this.http
        .get<User[]>(`${this.hostURl}/api/user/users`)
        .pipe(map(result => _.map(result, (t) => new User(t.username, t.color))));
    }
  
    public getByUsername(username: string): Observable<any> {
      return this.http
      .get(`${this.hostURl}/api/user/users/${username}`)
      .pipe(map(result => console.log(result)));
    }
  
    public newUser(resource: User): Observable<any> {
      return this.http
        .post<User>(`${this.hostURl}/api/user/user`, resource)
        .pipe(map(result => console.log(result)));
    }
  
    public update(resource: User): Observable<any> {
      return this.http
        .put<User>(`${this.hostURl}/api/user/users/${resource.username}`, resource)
        .pipe(map(result => console.log(result)));
    }
  
    public delete(): Observable<void> {
      return this.http.delete<void>(`${this.hostURl}/api/users`);
    }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private hostURl: string;
  httpClient: any;

  constructor(private http: HttpClient ) {
    this.hostURl = environment.host;
  }



  public getUsers(){
    let apiURL = `${this.hostURl}/api/user`;
    console.log(apiURL);
    return this.http
      .get<User>(apiURL)
      .toPromise()
      ;

  }

  public getUser(id : any)
  {
    let apiURL = `${this.hostURl}/api/user/` + id;
    return this.http
      .get<User>(apiURL)
      .toPromise();
  }

  private getUserReq(username: string): Observable<any>{
    return this.http.get(`${this.hostURl}/api/user/${username}`);
  }




  public async getByUsername(username: string): Promise<User> {
    let user: any;
    return this.getUserReq(username)
      .toPromise()
      .then(
        res => {return new User(res.username, res.color)}
      )

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

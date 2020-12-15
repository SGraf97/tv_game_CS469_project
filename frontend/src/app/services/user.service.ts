import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as _ from 'lodash';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private hostURl: string;
  httpClient: any;

  private user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
  loggedInUser = this.user.asObservable();

  constructor(private http: HttpClient ) {
    this.hostURl = environment.host;    
    
  }

  public getAll(){
    return this.http
      .get<User[]>(`${this.hostURl}/api/user`)
      .toPromise();
  }

  public getUsers(){
    let apiURL = `${this.hostURl}/api/user`;
    console.log(apiURL);
    return this.http
      .get<User>(apiURL)
      .toPromise();

  }

  public getById(id: string) {
    return this.http
      .get<User>(`${this.hostURl}/api/user/${id}`)
      .toPromise();
  }

  public newUser(resource: User){
    return this.http
      .post<User>(`${this.hostURl}/api/user`, resource)
      .toPromise();
  }

  public update(resource: User){
    return this.http
      .put<User>(`${this.hostURl}/api/user/${resource._id}`, resource)
      .toPromise();
  }

  public delete(): Observable<void> {
    return this.http.delete<void>(`${this.hostURl}/api/users`);
  }

  /**
   * update logged-in user's instance
   */
  updateUser(userUpdate: User) {
    localStorage.setItem('user', JSON.stringify(userUpdate));
    this.user.next(userUpdate);
    console.log('service got:');
    console.log(this.user);
  }

  getLoggedInUser(){
    return this.user.value;
  }

  logout(){
    localStorage.removeItem('user');
  }
}

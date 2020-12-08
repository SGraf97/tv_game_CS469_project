import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {map} from "rxjs/operators";
import {Message} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private hostURl: string;
  httpClient: any;

  constructor(private http: HttpClient ) {
    this.hostURl = environment.host + '/api/' + 'message';
  }


  public getAll(){
    let apiURL = `${this.hostURl}`;
    console.log(apiURL);
    return this.http
      .get<Message>(apiURL)
      .toPromise()
      ;

  }



  public newMessage(resource: Message): Observable<any> {
    return this.http
      .post<Message>(`${this.hostURl}`, resource);
  }

  public update(resource: User): Observable<any> {
    return this.http
      .put<User>(`${this.hostURl}/api/user/users/${resource.username}`, resource)
      .pipe(map(result => console.log(result)));
  }

  public delete(id : String): any {
    console.log(`${this.hostURl}` + id);
    return this.http.delete<void>(`${this.hostURl}` + '/' + id).toPromise();
  }


}

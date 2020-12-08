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
export class APIService {
  private hostURl: string;
  httpClient: any;

  constructor(private http: HttpClient ) {
    this.hostURl = environment.host + '/api/';
  }


  public getAllfrom(where:String){
    let apiURL = `${this.hostURl}` + where;
    console.log(apiURL);
    return this.http
      .get<Message>(apiURL)
      .toPromise()
      ;

  }

  public create( where : String , resource: any) {
    return this.http
      .post(`${this.hostURl}`+where, resource)
      .toPromise();
  }



  public update(where:String,resource: any) {
    return this.http
      .put(`${this.hostURl}` + where, resource)
      .toPromise();

  }

  public delete(where , id : String): any {
    let apiUrl = `${this.hostURl}` + where + '/' + id;
    return this.http.delete<void>(apiUrl).toPromise();
  }

  public broadcastEvent(event:String , body:any){
    let socketsURL = this.hostURl + 'socket-events/broadcast/'+event;
    return this.http.post(socketsURL , body).toPromise().then(res=>{
      console.log('egine to event');
    })
  }

}

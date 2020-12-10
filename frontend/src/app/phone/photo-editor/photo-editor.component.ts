import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  
  public edit = "Edit Screenshot";

  public galleryHeight = "20%";
  public gallery = new Array(20);
  public loggedInUser: User;
  public captureURL: string;

  public buttons = {
    save: {
      icon: "fas fa-file-download mx-2 pt-1",
      label: "Save"
    },
    text: {
      icon: "far fa-edit mx-2 pt-1",
      label: "Edit"
    },
    delete: {
      icon: "fas fa-trash mx-2 pt-1",
      label: "Delete",
      style: "color: #E76F51"
    },
    share: {
      icon: "fas fa-share-alt mx-2 pt-1",
      label: "Share"
    }

  }

  constructor(private apiService: APIService, private userService: UserService) {

  }

  ngOnInit(): void {
    let tmpCaptures: any;
    //get logged-in user
    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user);
    //capture screen request
    this.apiService.create("capture", {user: this.loggedInUser.username})
    //get screenshot
    this.apiService.getAllfrom("capture").then(
      res => {
        tmpCaptures = res;
        for(let capture of tmpCaptures){
          if(capture.user === this.loggedInUser.username){
            this.captureURL = capture.captureURL;
            console.log(this.captureURL)
            break;
          }
        }
      }
    )
  }

  extendGallery() {
    this.galleryHeight =
      this.galleryHeight == "20%" ? "85%" : "20%";
  }


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { SocketsService, UserService } from 'src/app/services';
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

  imageFile: any;

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

  constructor(private apiService: APIService, private userService: UserService, private socketService: SocketsService) {

  }

  ngOnInit(): void {
    //get logged-in user
    this.userService.loggedInUser.subscribe(user => this.loggedInUser = user);
    //capture screen request
    this.apiService.broadcastEvent("capture", { user: this.loggedInUser.username })
    //get screenshot
    this.socketService.syncMessages("capture" + this.loggedInUser.username).subscribe(msg => {
      this.captureURL = msg.message.screenshot;
      console.log(this.captureURL);
      this.convertToFile(this.captureURL);
    })
  }

  extendGallery() {
    this.galleryHeight =
      this.galleryHeight == "20%" ? "85%" : "20%";
  }

  saveImage() {
    this.apiService.create("files/upload", this.captureURL).then(
      res => console.log(res)
    );
  }

  convertToFile(url: string) {
    let base64 = url.split("base64,")[1];

    var uuid = require("uuid");
    var id = uuid.v4();
    let imageName = this.loggedInUser.username + id;

    console.log(imageName)

    let imageBlob = this.dataURItoBlob(base64);

    this.imageFile = new File([imageBlob], imageName, { type: 'image/png' });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  delete() {
    window.location.href = "/phone/menu"
  }
  shareOnTwitter() {
    let username = this.loggedInUser.username;
    let twit = "";
    let media = this.captureURL;
    this.apiService.create('twitter', { username, twit });
    window.location.href = "/phone/menu"
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  public edit = "Edit Screenshot";

  public galleryHeight = "20%";
  public gallery = new Array(20);

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

  constructor() {
    
   }

  ngOnInit(): void {
  }

  extendGallery(){
    this.galleryHeight = 
        this.galleryHeight == "20%" ? "85%" : "20%";
  }

}

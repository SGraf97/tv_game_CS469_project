import { Component, OnInit } from '@angular/core';
import {types} from 'util';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  dotArray: Array<{index: number , active: boolean , imagePath: string }> = [];

  dotHtml: any;

  images: any;

 

  constructor() { }

  ngOnInit(): void {

   


    
    // tslint:disable-next-line:prefer-const
    let photoLength = 12;

    
    for (let i = 0; i < photoLength; i++){
      const obj = {index : photoLength-i , active : false , imagePath: "assets/Rectangle%2069.png" };
      if(i == 0)obj.active = true; 
      this.dotArray[i] = obj;
    }

    

    
    
    const likebtn = document.getElementById('like') as any;
    const dislikebtn  = document.getElementById('dislike') as any;

    this.images = Array.from(document.querySelectorAll('.image'));


    likebtn.addEventListener('click' , () => {
      const current = this.images.pop();

      current.classList.add('liked');
      current.style.display = 'none';
      console.log(current.style.transitionDuration);
    });
    dislikebtn.addEventListener('click' , () => {
      const current = this.images.pop();

      current.classList.add('disliked');
      current.style.display = 'none';
      // console.log(current.style.transitionDuration);
    });
    
  }





}

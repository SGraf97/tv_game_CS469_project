import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/services';
import { APIService } from 'src/app/services/API.service';
import { initdbService } from 'src/app/services/initdb.service';
import {questionModel} from "../../model/question.model";

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})
export class QuizGameComponent implements OnInit {

  question: string;
  questions: any;
  constructor( private socketService : SocketsService ,private APIservice:APIService) { }

  ngOnInit(): void {
    this.APIservice.getAllfrom("questions").then(res=>{
      this.questions = res;
      console.log(res);
      this.nextQuestion();
    });



    this.socketService.syncMessages('end-game').subscribe(msg=> {
      if(msg.message.message === 'correct'){
        this.question = "That's correct!"
        setTimeout(() => {
          this.nextQuestion();
      }, 4000);
      }else if(msg.message.message === 'wrong'){
        this.question = "No, that's not it."
        setTimeout(() => {
          this.nextQuestion();
      }, 4000);
      }else{
        location.href = '/main';
      }
      
    })

  }

  nextQuestion(){
    let random = Math.floor(Math.random() * this.questions.length );
    this.APIservice.broadcastEvent('table-question' , this.questions[random])
    this.question = this.questions[random].question;
  }

}

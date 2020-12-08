import { Component, OnInit } from '@angular/core';
import {APIService, SocketsService} from "../../services";

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
    //post some questions
    this.APIservice.broadcastEvent('testEvent' , 'einaio to body');


    this.APIservice.getAllfrom('questions').then(res=>{
      this.questions = res;
      let random = Math.floor(Math.random() * this.questions.length );
      this.APIservice.broadcastEvent('table-question' , this.questions[random]);
      console.log(random);
    });



    this.socketService.syncAllMessages().subscribe(msg=> {
      console.log(msg);
    })


    // get question from db
    this.question = 'Η Βίκυ Καγιά έχει πρωταγωνιστήσει στο βίντεο κλιπ του γνωστού τραγουδιστή ...';

  }

}

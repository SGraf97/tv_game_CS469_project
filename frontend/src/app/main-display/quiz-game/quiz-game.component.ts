import { Component, OnInit } from '@angular/core';
import {APIService, initdbService, SocketsService} from "../../services";
import {questionModel} from "../../model/question.model";

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})
export class QuizGameComponent implements OnInit {

  question: string;
  questions: any;
  constructor( private socketService : SocketsService ,private APIservice:APIService ) { }

  ngOnInit(): void {

    // this.addQuestions();

    this.APIservice.getAllfrom('questions').then(res=>{
      this.questions = res;
      console.log(res);
      let random = Math.floor(Math.random() * this.questions.length );
      this.APIservice.broadcastEvent('table-question' , this.questions[random]).then(res=>{
      });
      this.question = this.questions[random].question;
    });



    this.socketService.syncAllMessages().subscribe(msg=> {
      if(msg.event == 'end-game'){
        location.href = '/main/home';
      }
      console.log(msg);
    })

  }



  public  addQuestions(){
    this.questions = [];
    let q = new questionModel();
    let tempArray = [];
    q.question = 'Η Βίκυ Καγιά έχει πρωταγωνιστήσει στο βίντεο κλιπ του γνωστού τραγουδιστή ...';
    q.answer = 'Λε Πα';
    q.options = [
      'Λε Πα',
      'Ρεμος',
      'χατζηφραγκετα',
      'ΝΙΒΟ'
    ];

    tempArray.push(q);
    console.log(tempArray);
    this.APIservice.create('questions' , tempArray[0]).then(res=>{
      this.questions.push(res);
    });

  }



}

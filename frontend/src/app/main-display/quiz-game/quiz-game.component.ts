import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.css']
})
export class QuizGameComponent implements OnInit {

  question: string;
  constructor() { }

  ngOnInit(): void {


    // get question from db
    this.question = 'Η Βίκυ Καγιά έχει πρωταγωνιστήσει στο βίντεο κλιπ του γνωστού τραγουδιστή ...';

  }

}

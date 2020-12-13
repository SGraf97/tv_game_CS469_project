import {APIService} from "./API.service";
import {questionModel} from "../model/question.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class initdbService{
  private questions = new Array();

  constructor(private apiService: APIService ) {
    this.apiService.getAllfrom("questions").then(
      res => {
        if(!res)
          this.create()
      }
    )
  }

  create(){
    let q = new questionModel();
    q.question = 'Η Βίκυ Καγιά έχει πρωταγωνιστήσει στο βίντεο κλιπ του γνωστού τραγουδιστή ...';
    q.answer = 'Λε Πα';
    q.options = [
      'Λε Πα',
      'Ρεμος',
      'χατζηφραγκετα',
      'ΝΙΒΟ'
    ];
    this.questions.push(q);

    q.question = 'Ποιά ήταν η νικήτρια του GNTM2;';
    q.answer = 'Άννα-Μαρία';
    q.options = [
      'Ροζάνα',
      'Κάτια',
      'Άννα-Μαρία',
      'ΝΙΒΟ'
    ];
    this.questions.push(q);

    q.question = 'Πως λέγεται η art director του show;';
    q.answer = 'Genevieve';
    q.options = [
      'Ελένη',
      'Λίτσα',
      'Σούλα',
      'Genevieve'
    ];
    this.questions.push(q);

    q.question = 'Ποιός/ά απο τους κριτές είναι και σχεδιαστής/-ρια μόδας;';
    q.answer = 'Άγγελος Μπράτης';
    q.options = [
      'Βίκυ Καγιά',
      'Δημήτρης Σκουλός',
      'Άγγελος Μπράτης',
      'Genevieve'
    ];
    this.questions.push(q);

    for(let q of this.questions){
      this.apiService.create("questions", q)
    }
  }








}

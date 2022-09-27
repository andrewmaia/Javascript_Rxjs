import { Component, OnInit } from '@angular/core';
import {from, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  constructor() { }

  
  ngOnInit(): void {

  }

  subjectAsObserver(){
    let subject = new Subject<number>();
    subject.subscribe({
      next: (v) => alert(`Observer1 ${v}`),
    });

    subject.subscribe({
      next: (v) => alert(`Observer2 ${v}`),
    }); 

    const observable= from ([1,2]);
    observable.subscribe(subject);
  }

  subjectAsObservable(){
    const subject = new Subject<number>();
 
    subject.subscribe({
      next: (v) => alert(`observerA: ${v}`),
    });
      ''
    subject.subscribe({
      next: (v) => alert(`observerB: ${v}`),
    });
     
    subject.next(1);
    subject.next(2);
  } 
}


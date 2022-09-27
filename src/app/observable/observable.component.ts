import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  constructor() { }

  
  ngOnInit(): void {

  }

  observableSincrono(){
    let observable = new Observable( subscriber=>{
      subscriber.next(1);
      subscriber.complete();
    });
    observable.subscribe(x=>alert(`Sincrono ${x}`));
  }

  observableAssincrono(){
    let observable = new Observable( subscriber=>{
      setTimeout(() => {
        subscriber.next(1);
        subscriber.complete();
     }, 1000);
    });
    observable.subscribe(x=>alert(`Assincrono ${x}`));
  } 

  observableMaisDeUmAssinante(){
    let observable = new Observable( subscriber=>{
      subscriber.next(1);
      subscriber.complete();
    });
    observable.subscribe(x=>alert(`Assinante 1 ${x}`));
    observable.subscribe(x=>alert(`Assinante 2 ${x}`));
  
  }

  observableRetornaMaisDeUmValor(){
    let observable = new Observable( subscriber=>{
      subscriber.next(1);
      subscriber.next(2); 
      subscriber.complete();
    });
    observable.subscribe(x=>alert(`${x}`));
  } 

  cancelarInscricao(){
    let observable = new Observable( subscriber=>{
      setTimeout(() => {
        subscriber.next(1);
      }, 2000);

      return function unsubscribe() {
        alert('Você se desinscreveu-se');
      };
    });
    const subscription  = observable.subscribe(x=>alert(`${x}`));
    subscription.unsubscribe();
  } 
}


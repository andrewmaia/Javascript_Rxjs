import { Component, OnInit } from '@angular/core';
import {concat, fromEvent, Observable, of} from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  constructor() { }

  
  ngOnInit(): void {

  }

  operadorOf(){
    let observable = of (2,4,5);
    observable.subscribe(x=>alert(`Valor: ${x}`));
  }

  operadorFromEvent(){
    let div = document.getElementById("divFromEvent") as HTMLDivElement;;
    const clicks = fromEvent(div, 'click');
    clicks.subscribe(x => alert(`Você clicou na Div from Event `));
  }

  operadorConcat(){
    let observable1 = of (2,4,5);
    let observable2 = of (3,7,9); 
    let observableResult = concat(observable1,observable2);
    observableResult.subscribe(x=>alert(`Valor: ${x}`));
  }
  
}


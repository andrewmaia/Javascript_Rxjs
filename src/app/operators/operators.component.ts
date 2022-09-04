import { Component, OnInit } from '@angular/core';
import {concat, first, fromEvent, interval, map, Observable, of, takeUntil, throttleTime} from 'rxjs';

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
    let div = document.getElementById("divFromEvent") as HTMLDivElement;
    const clicks = fromEvent(div, 'click');
    clicks.subscribe(x => alert(`Você clicou na Div from Event `));
  }

  operadorConcat(){
    let observable1 = of (2,4,5);
    let observable2 = of (3,7,9); 
    let observableResult = concat(observable1,observable2);
    observableResult.subscribe(x=>alert(`Valor: ${x}`));
  }

  operadorMap(){
    let observable = of (2,4,5);
    observable.pipe(map(x=>x*2)).subscribe(x=>alert(`Valor: ${x}`));
  }

  operadorFirst(){
    let observable = of (2,4,5);
    observable.pipe(first()).subscribe(x=>alert(`Valor: ${x}`));
  }
  
  operadorThrottleTime(){
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(throttleTime(5000));
    result.subscribe(()=>alert(`Ei vc clicou na pagina. Agora essa mensagem só irá aparecer se você clicar depois de 5 segundos`));
    //Repare que o observable resultante que o throttleTime produz só voltará a emitir o evento click depois de 5 segundos
    //Qualquer clique feito nesse período será ignorado
  }

  operadorTakeUntil(){
    let div = document.getElementById("divTakeUntil") as HTMLDivElement;
    const source = interval(2000);
    const clicks = fromEvent(div, 'click');
    const result = source.pipe(takeUntil(clicks));
    result.subscribe(x => alert(x));
  }

}


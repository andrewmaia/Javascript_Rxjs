import { Component, OnInit } from '@angular/core';
import {catchError, concat, delay, first, fromEvent, interval, map, Observable, of, takeUntil, tap, throttleTime} from 'rxjs';

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

  operadorTap(){
    of(0.2,0.6,0.3).pipe(
      tap(x => alert(x)),
      map(n => n > 0.5 ? 'big' : 'small')
    ).subscribe(x => alert(x));
  }

  operadorDelay(){
    of(1,2,3).pipe(
      delay(4000),
    ).subscribe(x => alert(x));
    //Após se inscrever a emissao dos valores será atrasada em 4 segundos
  }

  operadorCatchError(){
    of(1,2,3,4).pipe(
      tap(x => {
        if (x === 4) 
          throw 'Não pode ser 4!';
      }),
      catchError(err => {
        alert(err);
        throw 'error in source. Details: ' + err; //é obrigatório na sixtaxe disparar um novo erro, ou o proprio erro  ou retornar um novo observable
      })
      ).subscribe(x => alert(x));
  }


}


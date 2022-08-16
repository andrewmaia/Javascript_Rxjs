import { Component } from '@angular/core';
import { fromEvent, throttleTime, map, scan } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rxjs';
}

/*------------Clique no Document---------------*/

//JavaScript Convencional
//document.addEventListener('click', () => console.log('Clicked!'));

//Usando RXJS
//fromEvent(document, 'click').subscribe(() => console.log('Clicked by Rxjs!'));


/*------------Contagem de Cliques no Document---------------*/

//JavaScript Convencional
/*let count = 0;
document.addEventListener('click', () => console.log(`Clicked ${++count} times`));*/

//Usando RXJS
/*fromEvent(document, 'click')
  .pipe(scan((countRxjs) => countRxjs + 1, 0))
  .subscribe((countRxjs) => console.log(`Clicked ${countRxjs} times`));*/


/*------------Permitir somente um clique por segundo---------------*/

//JavaScript Convencional
/*let count = 0;
let rate = 1000;
let lastClick = Date.now() - rate;
document.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`);
    lastClick = Date.now();
  }
});*/

//Usando RXJS
/*fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));
  */

  
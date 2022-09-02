import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { path: "observable", component: ObservableComponent },
  { path: "operators", component: OperatorsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

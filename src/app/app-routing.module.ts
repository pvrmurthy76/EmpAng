import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  { path: '' , component: EmployeeListComponent},
  { path: 'create', component: EmployeeCreateComponent},
  { path: 'detail/:id', component: EmployeeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

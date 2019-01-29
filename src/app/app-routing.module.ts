import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksheetComponent } from './worksheet/worksheet.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'worksheet', component: WorksheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

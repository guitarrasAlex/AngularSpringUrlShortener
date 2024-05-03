import { Routes } from '@angular/router';
import { LinkcrudComponent } from './linkcrud/linkcrud.component';
import { AppComponent } from './app.component';
import { RutearComponent } from './rutear/rutear.component';

export const routes: Routes = [
   
{path:'api/:link', component: RutearComponent},
//{path: '**', redirectTo: '', pathMatch: 'full'},
//{path:'',  component: AppComponent }
];

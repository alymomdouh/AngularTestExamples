import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/Components/default/default.component';
import { RegisterComponent } from 'src/Components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Default',
    pathMatch: 'full'
  },
  {
    path: 'Default',
    component: DefaultComponent
  },
  { path: 'Register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

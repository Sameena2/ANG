import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CodeforinterviewComponent } from './codeforinterview/codeforinterview.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : "", redirectTo: "codeforinterview" , pathMatch : "full"
  },
  {
    path : "codeforinterview", component : CodeforinterviewComponent
  },
  {
    path : "register" , component : RegisterComponent
  },
  {
    path : "search" , component : SearchComponent
  },
  {
    path : "all-users", component : AllUsersComponent
  },
  {
    path : "login", component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

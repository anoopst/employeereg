import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpRegComponent } from './emp-reg/emp-reg.component';
import { EmpMainComponent } from './emp-main/emp-main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpRegComponent,
    EmpMainComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      [
        {path: 'main', component: EmpMainComponent},
        {path: 'reg', component: EmpRegComponent},
        {path: 'list', component: EmpListComponent},
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: '**', redirectTo: 'main', pathMatch: 'full' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

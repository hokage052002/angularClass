import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './comp-a/child/child.component';
import { MyFirstService } from './my-first.service';

const routes: Routes = [
  { path: '', redirectTo: 'test' , pathMatch: 'full'},
  { path: 'heroes', component: CompAComponent, children: [{ path: '', redirectTo: 'kratos' , pathMatch: 'full'},
  {path: 'kratos', component: ChildComponent}] },
  {path: 'test', component: TestComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    NavbarComponent,
    TestComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }

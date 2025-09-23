import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListFormsComponent } from './components/list-forms/list-forms.component';

@NgModule({
  declarations: [
    ListFormsComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Passo 2: Adicionar o módulo aos imports
    AppComponent
  ],
  providers: [],
})
export class AppModule { }
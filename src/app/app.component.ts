import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListFormsComponent } from './components/list-forms/list-forms.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListFormsComponent, ListUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-teste-iris';
}

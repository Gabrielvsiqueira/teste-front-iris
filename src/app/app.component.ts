import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-teste-iris';

}

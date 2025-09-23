import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule], // <-- Add CommonModule to the imports array
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.list().subscribe(data => this.users = data);
  }

  addUser(user: User) {
    this.userService.create(user).subscribe(() => this.loadUsers());
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }
}
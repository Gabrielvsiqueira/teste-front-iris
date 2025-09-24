import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ListFormsComponent } from '../list-forms/list-forms.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ListFormsComponent
  ],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  dataSource!: MatTableDataSource<User>;
  selectedUser?: User | null = null;
  isFormVisible: boolean = false;
  filterValue: string = '';

  displayedColumns: string[] = ['name', 'email', 'age', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.list().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (user, filter) => {
        const value = filter.trim().toLowerCase();
        return user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
      };
    });
  }

  applyFilter(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.filterValue = input;
    this.dataSource.filter = input.trim().toLowerCase();
  }

  clearFilter() {
    this.filterValue = '';
    this.dataSource.filter = '';
  }

  addUser(user: User) {
    this.userService.create(user).subscribe(() => this.loadUsers());
    this.isFormVisible = false;
  }

  updateUser(user: User) {
    this.userService.update(user).subscribe(() => this.loadUsers());
    this.isFormVisible = false;
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => this.loadUsers());
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
    this.isFormVisible = true;
  }

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
    if (!this.isFormVisible) this.selectedUser = null;
  }
}

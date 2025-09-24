import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnChanges {
  @Input() userToEdit: User | null = null;
  @Output() save = new EventEmitter<User>();
  @Output() update = new EventEmitter<User>();

  form: FormGroup;
  isEditing = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/.*\S.*$/)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.min(18)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userToEdit'] && changes['userToEdit'].currentValue) {
      this.form.patchValue(this.userToEdit as User);
      this.isEditing = true;
    } else {
      this.form.reset();
      this.isEditing = false;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.isEditing && this.userToEdit) {
        const updatedUser: User = { ...this.userToEdit, ...this.form.value };
        this.update.emit(updatedUser);
      } else {
        this.save.emit(this.form.value);
      }
      this.form.reset();
      this.isEditing = false;
    }
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get age() { return this.form.get('age'); }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './list-forms.component.html',
  styleUrl: './list-forms.component.css'
})
export class ListFormsComponent {
  @Output() save = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.min(18)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.form.reset();
    }
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get age() { return this.form.get('age'); }
}

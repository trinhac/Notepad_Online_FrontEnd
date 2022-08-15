import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      email: new FormControl('', { validators: [Validators.email] }),
      password: new FormControl(''),
      dob: new FormControl(0),
    });
   }

  ngOnInit(): void {
  }
  submit() {
    if (this.loginForm.valid) {
      this.users.push(this.loginForm.value);
    }
  }

  

}

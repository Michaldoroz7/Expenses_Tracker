import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user-reg-form',
  templateUrl: './user-reg-form.component.html',
  styleUrls: ['./user-reg-form.component.scss']
})
export class UserRegFormComponent {
  registrationForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
      this.registrationForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

    onSubmit() {
      if (this.registrationForm.invalid) {
        return;
      }

      const user = this.registrationForm.value;
      this.userService.registerUser(user).subscribe(
        () => {
          // Registration successful, handle success action
        },
        (error) => {
          // Registration failed, handle error action
        }
      );
    }
}

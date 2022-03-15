
import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent {

  constructor(private formBuilder: FormBuilder) { }

  signUpForm = this.formBuilder.group({
    username: new FormControl('', Validators.required),
    password: '',
    confirmPassword: ''
  });

  onSubmit = (): void => {
    console.log(this.signUpForm.value);
  }
}


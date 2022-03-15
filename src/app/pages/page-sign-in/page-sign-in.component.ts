import { Component} from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent {

  signInForm = this.formBuilder.group({
    'username': '',
    'password': ''
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit = (): void => {
    console.log(this.signInForm.value);
  }

}

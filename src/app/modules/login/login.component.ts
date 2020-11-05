import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  users: any

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appService: CommonService
  ) {
  }

  async ngOnInit() {
  this.form = this.fb.group({
      username: ['', Validators.email],
    });
    
    this.getUsers()
  }

  getUsers(): void {
    this.appService.getUsers()
    .subscribe(users => this.users = users);
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    const found = this.users.some(el => el.email === this.form.get('username').value);
    if (!found) {
        this.loginInvalid = true;
    } else {
      this.formSubmitAttempt = true;
      const currentUser = this.users.find(user => user.email === this.form.get('username').value)
      this.router.navigate(['/profile', currentUser.id]);
    }
  }
}


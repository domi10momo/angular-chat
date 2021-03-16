import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private UserService: UserService) {}

  ngOnInit(): void {}

  signup(form: NgForm): void {
    const { email, password } = form.value;

    this.UserService.create(email, password).then(() =>
      this.router.navigateByUrl('/users/new')
    );
  }
}

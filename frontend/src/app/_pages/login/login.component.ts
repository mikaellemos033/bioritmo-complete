import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { JwtStorage } from 'src/app/_storages/jwt.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  frmGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 

    this.frmGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  get f() { return this.frmGroup.controls; }

  ngOnInit() {
  }

  onSubmit() {
    this.error = false;
    this.authService.login(this.frmGroup.value).subscribe(resp => {

      let token = resp.headers.get('authorization');
      if (!token) {
        this.error = true;
        return;
      }
 
      localStorage.setItem(JwtStorage, token.replace('Bearer ', ''))
      this.router.navigateByUrl('/')
    })
  }

}

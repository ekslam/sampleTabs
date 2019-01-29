import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  


  ngOnInit() {
  }

  constructor (public routes: Routes) {

  }
  async navTabs(){
    this.routes.navigateByUrl('/app/tabs/(home:home)');
    
  }
  

}

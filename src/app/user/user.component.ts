import { Component, OnInit } from '@angular/core';
// services
import { UserManagerService } from './services/user-manager.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  email = '';
  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser(){
    this.userManagerService.getRandomName().subscribe((response) =>{
      console.log(response);
      this.email = response.results[0].email;
    })
  }

}

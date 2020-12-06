import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { TransferserviceService } from '../transferservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = new User("", "", "");
  users: any;
  result : any;
  message: any;
  constructor(private service: UserRegistrationService, private transferservice: TransferserviceService) { }

  ngOnInit(): void {
    let resp = this.service.getUsers();
    resp.subscribe((data) => this.users = data);
  }


  public registerNow() {
  
    if (this.user.firstname.length > 1 && this.user.lastname.length > 1 && this.user.address.length > 1) {
      let resp = this.service.doRegistration(this.user);
      resp.subscribe((data) => this.getDetail());
      this.user.firstname = " ";
      this.user.lastname = " ";
      this.user.address = " ";
      
    } 
  }

  public getDetail() {
    let resp = this.service.getUsers();
    resp.subscribe((data) => this.result = data);
  }
  
  public delete(id: any) {
    let resp = this.service.deleteUserById(id);

 
    resp.subscribe((data) => this.result = data );
  }

}

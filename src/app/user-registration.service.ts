import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(user: User) {
  
    return this.http.post("http://localhost:5000/user/", user, { responseType: 'text' as 'json' });
    
  }

  public getUsers() {
    return this.http.get("http://localhost:5000/user/");
  }

  public deleteUserById(id: any) {
    return this.http.delete("http://localhost:5000/user/" + id);
  }


}

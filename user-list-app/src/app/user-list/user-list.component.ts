import { Component } from '@angular/core';
import users from '../../../public/users.json'; 

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserlistComponent {

    users:any;

    ngOnInit(){
        this.users = users;
    }
  searchByEmail(email: string): boolean {
    return this.users.some((user: { email: string }) => user.email === email);
  }

}

import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserProfileService]
})
export class UserProfileComponent implements OnInit {
  username = '_pabeda_';
  firstName = 'Вікторія';
  lastName = 'Заремба';
  email = 'example@gmail.com';
  phone = '+380985796738';
  country = 'Україна';
  address = 'Сихів 30';
  dateOfBirth = '01.01.2000';

  ngOnInit(): void {
  }

 /*
 Колись буде стягувати інфу про юзера, там ще сервіс є
  */

  /*
  users= [{username:'user1'}];
  error: any;

  constructor(private userProfileService: UserProfileService) {
    this.getUsersData();
  }

  getUsersData = () => {
    this.userProfileService.getAllUsersData().subscribe()
      data => {
        this.users = data;
      };
        error => {
          console.log(error);
        }
  }
/*


  username = 'username';
  firstName = "Ім'я";
  lastName = 'Прізвище';
  email = 'example@gmail.com';
  phone = '+38095796738';
  country = 'Ukraine';
  address = 'Сихів 30';
  dateOfBirth = '01.01.2000';
 */

/*
  getUserData() {
    this.userProfileService.getUserData()
      .subscribe(
        (data: UserProfile) => this.userProfile = {...data},
        error => this.error = error);
  }
*/

}

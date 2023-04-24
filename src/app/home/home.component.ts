import { Component, NgIterable, OnInit, Optional, Self } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../../models/IUser'
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

public searchString:string="";
public users:any=null;

  constructor(private userService:UserService,private historyService:HistoryService) {
  }

  ngOnInit(){
    console.log(localStorage.getItem('history'));
    
  }

  onSearchClicked(){
    this.userService.getUser(this.searchString).subscribe(
      (data:any)=>{
        let users:IUser[]=[];
        for(let i=0;i<Math.min(data.items.length,5);i++)
        {
          let user=data.items[i];
          let u={
            name:user.login,
            avatarUrl:user.avatar_url,
            userName:user.login
          };
          users.push(u);
        } 
        this.users=users;  
        this.historyService.updateSearchHistory(users,this.searchString);  
      },
      ((err:string)=>{
        this.users=null;
      }
      ));
    
  }

}

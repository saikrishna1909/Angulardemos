import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  @Input('account')
account:{
  name:string,
  status:string
}
@Input()
Id:number
  ngOnInit(): void {
  }
  changeStatus(status:string){
      this.accountService.updatStatus(this.Id,status)
  }
deletedAccount(){
  this.accountService.deleteAccount(this.Id)
}
}

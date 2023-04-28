import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  serverId:number=1
  serverStatus:string='offline'
  e7:string='off'
  serverName:string="QAServer"
  serverDescription:string="Init Descriptor"
  getServerStatus(){
    return this.serverStatus
  }
 
  onButtonClick(){
    if(this.serverStatus =='online'){
      this.serverStatus = "offline"
      this.e7='on'
    }
    else if(this.serverStatus=='offline'){
        this.serverStatus='online'
        this.e7='off'
    }

  }
  onUpdateServerName(event:any){
    this.serverName=event.target.value;
  }
  getServerColor(){
    return this.serverStatus=='online'?'green':'tomato'
  }
  getButtonClass(){
    if(this.serverStatus=='online'){
    return 'btn btn-success'
  }
    else{
    return 'btn btn-danger'
  }
}
}

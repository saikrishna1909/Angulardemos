import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filteredStatus:string=''
  servers=[
    {
      serverSize:'large',
      name:'Production Server',
      status: 'stable',
      started: new Date('2022-04-20')
    },
    {
      serverSize:'medium',
      name:'Database Server',
      status: 'stable',
      started: new Date('2021-02-11')
    },
    {
      serverSize:'large',
      name:'Development Server',
      status: 'offline',
      started: new Date('2023-11-02')
    },
    {
      serverSize:'large',
      name:'QA Server',
      status: 'critical',
      started: new Date('2022-08-18')
    }
  ]
  getStatusClass(server){
    return {
      'list-group-item-success': server.status==='stable',
      'list-group-item-warning': server.status==='offline',
      'list-group-item-danger': server.status==='critical',

    }
  }
}

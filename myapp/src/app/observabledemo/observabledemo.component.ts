import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription,  interval } from 'rxjs';
import {filter,map} from 'rxjs/operators'
@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit,OnDestroy {

  constructor() { }
  private intervalSubscription:Subscription
  private customObservableSubscription:Subscription
  ngOnInit(): void {
    //  this.intervalSubscription=interval(1000).subscribe((count)=>{
    //   console.log(count)
    // })
    const customObservable=Observable.create((observer)=>{
      let count=0;
      setInterval(()=>{
        observer.next(count)
        count++
        if(count==21){
          observer.complete()
        }
        // if(count==10){
        //   observer.error(new Error('count is greater than 10'))
        // }
      },1000)
    }
    )
    this.customObservableSubscription= customObservable
    .pipe(
      filter((data:number)=>{
        return data%2==0;
      }),
      map((data:number)=>{
        return 'B'+data
      })
    ).subscribe((data)=>{
      console.log(data),
      ()=>{
        console.log("completed")
      },
      (error)=>{
        console.log("error found")
        alert(error.message)
      }
    })
  }
  ngOnDestroy(): void {
    //this.intervalSubscription.unsubscribe()
    this.customObservableSubscription.unsubscribe()
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  user={
    username:'',
    email:'',
    secret:'',
    gender:''
  }
  submitted: boolean;
  constructor() { }
genders=['Male','Female']
  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    // console.log(form.value)
    // console.log(form)
    this.user.username=form.value.username
    this.user.email=form.value.email
    this.user.secret=form.value.secret
    this.user.gender=form.value.gender
    this.submitted=true
    form.reset()

    }

  }



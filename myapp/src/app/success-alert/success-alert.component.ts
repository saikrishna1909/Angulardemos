import { Component } from "@angular/core";

@Component({
    selector:'success-alert',
    template:'<p>Successfull<button>Success Alert</button></p>',
    styles:  [
        `
        p {
        padding:10px;
        background-color: orangered;
        border:2px solid red;
    }
    `]
})
export class SuccessAlertComponent{}
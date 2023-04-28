import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { BasicHighlightDirective } from './custom-directives/basichighlight.directive';
import { BrightHighlightDirective } from './custom-directives/brighthighlight.directive';
import { BetterhighlightDirective } from './custom-directives/betterhighlight.directive';
import { BetterhighlightbindingDirective } from './custom-directives/betterhighlightbinding.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ObservabledemoComponent } from './observabledemo/observabledemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { MyCustompipe } from './custom-pipe/custom-pipe';
import { FilterPipe } from './filter.pipe';
import { RevStringPipe } from './rev-string.pipe';
import { MyblogComponent } from './myblog/myblog.component';
import { BlogsComponent } from './myblog/blogs/blogs.component';

const appRoute:Routes=[
  {path: '',component:HomeComponent},
  {path:'server',component:ServerComponent},
  {path:'warningalert',component:WarningAlertComponent},
  {path:'successalert',component:SuccessAlertComponent},
  {path:'products',component:ProductsComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'observable',component:ObservabledemoComponent},
  {path:'tforms',component:TformsComponent},
  {path:'pipes',component:PipesDemoComponent},
  {path:'blog',component:MyblogComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    AddproductComponent,
    ProductComponent,
    BasicHighlightDirective,
    BrightHighlightDirective,
    BetterhighlightDirective,
    BetterhighlightbindingDirective,
    AccountsComponent,
    NewaccountComponent,
    AccountComponent,
    HomeComponent,
    ObservabledemoComponent,
    TformsComponent,
    PipesDemoComponent,
    MyCustompipe,
    FilterPipe,
    RevStringPipe,
    MyblogComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoute),HttpClientModule
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

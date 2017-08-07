import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsideComponent } from './inside/inside.component';
import { TirarOsComponent } from './tirar-os/tirar-os.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsideComponent,
    TirarOsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: LoginComponent

      },
      {
        path: 'tiraros',
        component: TirarOsComponent
      },
      {
        path: 'inside',
        component: InsideComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

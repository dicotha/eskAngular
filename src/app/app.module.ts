import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InsideComponent } from './inside/inside.component';
import { TirarOsComponent } from './marketing/tirar-os/tirar-os.component';
import { MenusidebarComponent } from './menusidebar/menusidebar.component';
import { MarketingComponent } from './marketing/marketing.component';
import { BaixapagamentoComponent } from './marketing/baixapagamento/baixapagamento.component';
import { PedidoscomerroComponent } from './marketing/pedidoscomerro/pedidoscomerro.component';
import { ControledestatusComponent } from './marketing/controledestatus/controledestatus.component';
import { MudarstatusComponent } from './marketing/mudarstatus/mudarstatus.component';
import { EnderecoerradoComponent } from './marketing/enderecoerrado/enderecoerrado.component';
import { ValidarstatusComponent } from './preimpressao/validarstatus/validarstatus.component';
import { AprovaremmassaComponent } from './preimpressao/aprovaremmassa/aprovaremmassa.component';
import { CriarComponent } from './usuarios/criar/criar.component';
import { ModificarComponent } from './usuarios/modificar/modificar.component';

import { TestpresseroService } from './services/testpressero.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InsideComponent,
    TirarOsComponent,
    MenusidebarComponent,
    MarketingComponent,
    BaixapagamentoComponent,
    PedidoscomerroComponent,
    ControledestatusComponent,
    MudarstatusComponent,
    EnderecoerradoComponent,
    ValidarstatusComponent,
    AprovaremmassaComponent,
    CriarComponent,
    ModificarComponent
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
        path: 'marketing/tiraros',
        component: TirarOsComponent
      },
      {
        path: 'inside',
        component: InsideComponent
      },
      {
        path: 'usuario/criar',
        component: CriarComponent
      },
      {
        path: 'usuario/modificar',
        component: ModificarComponent
      },
      {
        path: 'marketing/baixadepagamento',
        component: BaixapagamentoComponent
      },
      {
        path: 'marketing/controledestatus',
        component: ControledestatusComponent
      },
      {
        path: 'marketing/enderecoerrado',
        component: EnderecoerradoComponent
      },
      {
        path: 'marketing/mudarstatus',
        component: MudarstatusComponent
      },
      {
        path: 'marketing/pedidoscomerro',
        component: PedidoscomerroComponent
      },
      {
        path: 'preimpressao/validarstatus',
        component: ValidarstatusComponent
      },
      {
        path: 'preimpressao/aprovaremmassa',
        component: AprovaremmassaComponent
      }
    ])
  ],
  providers: [TestpresseroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

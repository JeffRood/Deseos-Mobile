import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// SERVICIOS
import { ListaDeseosService } from './Services/Lista-Services';

//pipe
import { placeholdenPipe } from './pipe/Placeholden.pipe';
import { PendientesPipe } from './pipe/Pendiente.pipe';




import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { pendientescomponent } from '../pages/Pendientes/pendientes.component';
import { terminadoscomponent } from '../pages/Terminados/terminados.component';
import { Agregarcomponent } from '../pages/Agregar/Agregar.component';
import { detallecomponent } from '../pages/Detalle/detalle.component';




@NgModule({
  declarations: [
    MyApp,
    placeholdenPipe,
    PendientesPipe,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    pendientescomponent,
    terminadoscomponent,
    Agregarcomponent,
    detallecomponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    pendientescomponent,
    terminadoscomponent,
    Agregarcomponent,
    detallecomponent
  ],
  providers: [

ListaDeseosService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

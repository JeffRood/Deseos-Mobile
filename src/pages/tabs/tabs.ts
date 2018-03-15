import { Component } from '@angular/core';

import { pendientescomponent } from '../Pendientes/pendientes.component';
import { terminadoscomponent } from '../Terminados/terminados.component';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = pendientescomponent;
  tab2Root = terminadoscomponent;

  constructor() {

  }
}

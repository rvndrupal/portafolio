import { InformacionService } from './../../services/informacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent  {

  constructor( public _is: InformacionService){

  }


  anio:number=new Date().getFullYear();



}

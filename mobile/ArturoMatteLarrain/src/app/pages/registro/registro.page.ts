import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule} from '@ionic/angular';
import { VehiculoService } from 'src/app/services/vehiculo-service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  marca:string = "";
  modelo:string = "";
  patente:string = "";
  imagen:string = "";
  anio:number = 0;
  color:string = "";

  constructor() { }

  private vehiculoService = inject(VehiculoService);

  ngOnInit() {
  }


  async agregarAuto(){
    this.vehiculoService.agregarVehiculo({
      patente:this.patente,
      anio:this.anio,
      color:this.color,
      imagen:this.imagen,
      marca:this.marca,
      modelo:this.modelo
    });
  }

}

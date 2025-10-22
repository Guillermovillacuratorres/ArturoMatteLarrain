import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {IonicModule} from '@ionic/angular';
import { addIcons } from 'ionicons';

import { airplane, bluetooth, call, wifi,carSportOutline,
  personOutline

} from 'ionicons/icons';
import { Vehiculo } from 'src/app/models/vehiculo';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo-service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
     CommonModule, FormsModule, IonicModule
    ]
})
export class InicioPage implements OnInit {

  autos:Vehiculo[]=[];

  private router = inject(Router);
  private autoService = inject(VehiculoService);

  constructor() {
    addIcons({ carSportOutline,personOutline });
   }

  ngOnInit() {
    this.cargarAutos();
  }

  agregarAuto(){
    this.router.navigateByUrl("registro-auto");
  }

  async cargarAutos(){
    const solicitud = await this.autoService.obtenerVehiculos();
    this.autos = solicitud.data;
  }

}

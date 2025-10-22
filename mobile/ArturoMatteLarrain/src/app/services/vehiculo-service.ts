import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private http = inject(HttpClient);

  apiUrl = "https://dev.matiivilla.cl/matte_larrain";

  async obtenerVehiculos(){
    const respuesta = await lastValueFrom(this.http.get<ApiResponse<Vehiculo>>(this.apiUrl + '/api/autos')) 
    return respuesta;
  }


  
}

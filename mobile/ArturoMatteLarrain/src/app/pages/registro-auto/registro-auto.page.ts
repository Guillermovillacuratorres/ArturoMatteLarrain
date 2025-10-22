import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-registro-auto',
  templateUrl: './registro-auto.page.html',
  styleUrls: ['./registro-auto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroAutoPage implements OnInit {

  marca:string = "";
  modelo:string = "";
  anio:number = 0;
  patente:string = "";
  color:string = "";
  imagen:string = "";

  constructor() { }

  ngOnInit() {
  }

}

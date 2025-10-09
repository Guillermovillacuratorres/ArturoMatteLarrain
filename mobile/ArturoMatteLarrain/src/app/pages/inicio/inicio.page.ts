import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {IonicModule} from '@ionic/angular';
import { addIcons } from 'ionicons';

import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

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

  constructor() {
    addIcons({ airplane, bluetooth, call, wifi });
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonButtons,
          IonContent,
          IonHeader,
          IonMenu,
          IonMenuButton,
          IonTitle,
          IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
     CommonModule, FormsModule, IonMenu,IonMenuButton,
     IonButtons
    ]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

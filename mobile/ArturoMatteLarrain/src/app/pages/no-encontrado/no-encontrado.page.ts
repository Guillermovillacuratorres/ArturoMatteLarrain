import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-no-encontrado',
  templateUrl: './no-encontrado.page.html',
  styleUrls: ['./no-encontrado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NoEncontradoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

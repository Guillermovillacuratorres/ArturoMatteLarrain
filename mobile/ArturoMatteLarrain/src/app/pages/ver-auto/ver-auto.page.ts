import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ver-auto',
  templateUrl: './ver-auto.page.html',
  styleUrls: ['./ver-auto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VerAutoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

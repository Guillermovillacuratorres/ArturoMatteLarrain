import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,
          IonTitle, IonToolbar,IonImg,
          IonInput, IonInputPasswordToggle,
          IonButton
  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, 
            CommonModule, FormsModule,IonImg, IonInput,
            IonInputPasswordToggle,IonButton

          ]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

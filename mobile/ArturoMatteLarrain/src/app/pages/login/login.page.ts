import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,
          IonTitle, IonToolbar,IonImg,
          IonInput, IonInputPasswordToggle,
          IonButton
  } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

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

  correo:string = "";
  contrasena:string = "";

  constructor() { }

  private router = inject(Router);

  ngOnInit() {
  }


  auth(){
    if(this.correo == "duoc" && this.contrasena == "123"){
      this.router.navigateByUrl("inicio");
    }else{
      alert("Credenciales incorrectas!!!");
    }
  }

}

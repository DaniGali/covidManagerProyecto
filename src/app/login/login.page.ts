import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginUsuarioModel } from './model/LoginUsuarioModel';
import { LoginService } from './service/login.service';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {};
  usuario: LoginUsuarioModel;
  nombreUser: string;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  errorMsg = '';

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
    // comprobamos los valores del token
      console.log('Nombre: ' + this.tokenService.getUserName());
      console.log('Token: ' + this.tokenService.getToken());
      console.log('Roles: ' + this.tokenService.getAuthorities());
      this.nombreUser = this.tokenService.getUserName();
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin() {
    this.usuario = new LoginUsuarioModel(this.form.nombreUsuario, this.form.password);

    this.loginService.login(this.usuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.username);
      this.tokenService.setAuthorities(data.authorities);

      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      window.location.reload();
    },
      (err: any) => {
        console.log(err);
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMsg = err.error.message;
        this.presentAlert();
      }
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fail en el login',
      message: this.errorMsg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

onLogout() {
  this.tokenService.logOut();
  window.location.reload();
}

}

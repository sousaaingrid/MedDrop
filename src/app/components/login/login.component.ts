import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

export interface Usuario {
  id: string,
	nome: string,
  email: string,
  token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario
  token: string

  form: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.email,
      Validators.required,
    ]),
    senha: new FormControl(null, [Validators.required]),
    recaptcha: new FormControl(null, [Validators.required]),
  });

  @ViewChild('divRecaptcha')
  divRecaptcha!: ElementRef<HTMLDivElement>;


  get grecaptcha(): any {
    const w = window as any;
    return w['grecaptcha'];
  }

  constructor(private ngZone: NgZone, private http: HttpClient, private router: Router) {
    this.renderizarReCaptcha();
  }

  ngOnInit(): void {

  }


  renderizarReCaptcha() {

    this.ngZone.runOutsideAngular(() => {

      if (!this.grecaptcha || !this.divRecaptcha) {
        setTimeout(() => {
          this.renderizarReCaptcha();
        }, 500);

        return;
      }


      const idElemento =
        this.divRecaptcha.nativeElement.getAttribute('id');

      this.grecaptcha.render(idElemento, {
        sitekey: '6LdXaJ8mAAAAADWFzBeLYBBE-bFGjCSiibBBoxpF',
        callback: (response: string) => {

          this.ngZone.run(() => {
            this.form.get('recaptcha')?.setValue(response);
          });
        },
      });
    });
  }

  login() {
    console.log(this.form.value);
    const body = {email :this.form.value.email, senha: this.form.value.senha}
    this.http.post('http://localhost:3080/paciente/v1/login', body).subscribe((data: Usuario)=>{
      this.token=data.token
      console.log(data)
      localStorage.setItem("profile", JSON.stringify(data))
      this.router.navigate(["/produtos"])
    }
    )
  }

}

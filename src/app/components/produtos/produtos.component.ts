import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { environment } from '../../../environments/environment';

interface Produto {
  id: string,
	nome: string,
	priceId: string,
	categoria?: string,
	descricao: string,
	valor: number,
  quantidade: number
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  stripe: Stripe;
  produtos: Produto[]
  constructor(private http: HttpClient){}
  ngOnInit(): void {
      this.http.get('http://localhost:3080/produto/v1/').subscribe((data:Produto[])=>{
        this.produtos=data
      })
  }

  async checkout(produto:Produto) {
    this.stripe = await loadStripe(environment.stripe_key);

    if(!this.stripe) {
      return;
    }

    // Call your backend to create the Checkout session.

    // When the customer clicks on the button, redirect them to Checkout.;
    const { error } = await this.stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: produto.priceId, quantity:1}],
      successUrl: `http://localhost:4200/sucesso`,
      cancelUrl: `http://localhost:4200/falha`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }

  }
}

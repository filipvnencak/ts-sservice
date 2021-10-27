import { Injectable } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(
    private stripe: Stripe,
    ) { }  
  
  
  

  Stripe(){
    this.stripe.setPublishableKey(`${environment.stripePublish}`);
  }
}

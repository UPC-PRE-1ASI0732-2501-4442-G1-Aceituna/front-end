import {Component, inject} from '@angular/core';
import {PaymentComponent} from "../../../SelectionPlanes/components/payment/payment.component";
import {PlanListComponent} from "../../../SelectionPlanes/components/plan-list/plan-list.component";
import {PaymentService} from "../../../shared/services/payment.service";

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    PaymentComponent,
    PlanListComponent
  ],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {

  protected paymentService: PaymentService = inject(PaymentService);

}

import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionService } from '../../core/services/subscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('subscribeModalTpl') subscribeModalTpl!: TemplateRef<any>;

  constructor(
    private subscriptionService: SubscriptionService, 
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  durations = [
    { label: 'Quarterly', value: 'quarterly' },
    { label: 'Half Yearly', value: 'half' },
    { label: 'Yearly', value: 'yearly' }
  ];

  selectedDuration = 'half';

  basePlans = [
    {
      id: '67a1b2c3d4e5f67890123456',
      name: 'Basic',
      monthly: 999,
      discount: 0,
      popular: false
    },
    {
      id: '67a1b2c3d4e5f67890123457',
      name: 'Essential',
      monthly: 1999,
      discount: 25,
      popular: false
    },
    {
      id: '67a1b2c3d4e5f67890123458',
      name: 'Booster',
      monthly: 2999,
      discount: 25,
      popular: true
    },
    {
      id: '67a1b2c3d4e5f67890123459',
      name: 'Trade Hub',
      monthly: 7999,
      discount: 35,
      popular: false
    },
    {
      id: '67a1b2c3d4e5f6789012345a',
      name: 'Enterprise',
      monthly: 11999,
      discount: 35,
      popular: false
    }
  ];

  plans: any[] = [];
  selectedPlan: any = null;

  ngOnInit() {
    this.updatePlans();
  }

  changeDuration(duration: string) {
    this.selectedDuration = duration;
    this.updatePlans();
  }

  updatePlans() {
    let months = 6;
    if (this.selectedDuration === 'quarterly') months = 3;
    else if (this.selectedDuration === 'yearly') months = 12;

    this.plans = this.basePlans.map(plan => {
      const oldPrice = plan.monthly * months;
      const price = Math.round(oldPrice * (1 - plan.discount / 100));
      return {
        ...plan,
        oldPrice,
        price
      };
    });
  }

  openSubscribeModal(plan: any) {
    this.selectedPlan = plan;
    this.modalService.open(this.subscribeModalTpl, { centered: true });
  }

  confirmSubscription() {
    if (!this.selectedPlan) return;

    const planId = this.selectedPlan.id;
    const planName = this.selectedPlan.name;

    this.subscriptionService.subscribeToPlan(planId, planName).subscribe({
      next: (res) => {
        this.toastr.success(`Successfully subscribed to ${planName}!`, 'Subscribed');
      },
      error: (err) => {
        this.toastr.error('Failed to subscribe: ' + (err.error?.message || err.message), 'Error');
      }
    });
  }

  features: any[] = [
  {
  title:'Inventory List Limit',
  values:[20,100,300,500,1000]
  },
  {
  title:'Monthly Product Download',
  values:[20,100,300,500,1000]
  },
  {
  title:'Platform Integration',
  values:[1,1,2,3,3]
  },
  {
  title:'Product Listing',
  values:[false,true,true,true,true]
  },
  {
  title:'Platform Fee',
  values:[true,false,false,false,false]
  },
  {
  title:'Price Notifications',
  values:[true,true,true,true,true]
  },
  {
  title:'Access to High Profit Products',
  values:[false,true,true,true,true]
  },
  {
  title:'Order Manager',
  values:[true,true,true,true,true]
  },
  {
  title:'Returns',
  values:[true,true,true,true,true]
  },
  {
  title:'Bulk & ReSell Orders',
  values:[false,false,true,true,true]
  },
  {
  title:'Liquidate',
  values:[true,true,true,true,true]
  },
  {
  title:'My Connections',
  values:[true,true,true,true,true]
  },
  {
  title:'Chat & Email Support',
  values:[true,true,true,true,true]
  }
  ];
}

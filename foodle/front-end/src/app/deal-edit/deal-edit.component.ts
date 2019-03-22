import { Component, OnInit, Input } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal-edit',
  templateUrl: './deal-edit.component.html',
  styleUrls: ['./deal-edit.component.css']
})
export class DealEditComponent implements OnInit {

  @Input() DealData: any = { prod_name: '', prod_desc: '', prod_price: 0 };

  constructor(public rest: ServiceComponent, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getDeal(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.DealData = data;
    });
  }

  updateDeal() {
    this.rest.updateDeal(this.route.snapshot.params['id'], this.DealData).subscribe((result) => {
      this.router.navigate(['/deal_page/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}

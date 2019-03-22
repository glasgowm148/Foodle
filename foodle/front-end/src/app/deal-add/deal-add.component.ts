import { Component, OnInit, Input } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal-add',
  templateUrl: './deal-add.component.html',
  styleUrls: ['./deal-add.component.css']
})
export class DealAddComponent implements OnInit {

  @Input() DealData = { prod_name: '', prod_desc: '', prod_price: 0 };

  constructor(public rest: ServiceComponent, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addDeal() {
    this.rest.addDeal(this.DealData).subscribe((result) => {
      this.router.navigate(['/submit/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}

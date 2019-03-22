import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deal-detail',
  templateUrl: './deal-detail.component.html',
  styleUrls: ['./deal-detail.component.css']
})
export class DealDetailComponent implements OnInit {

  Deal:any;

  constructor(public rest:ServiceComponent, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getDeal(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.Deal = data;
    });
  }

}

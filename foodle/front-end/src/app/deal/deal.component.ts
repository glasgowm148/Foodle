import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

import { ActivatedRoute, Router } from '@angular/router';
import { IImage } from '../material-nav/modules/slideshow/IImage';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  deals:any = [];

 /* info: String;
  picture: IImage;
  been_liked: boolean;
  been_disliked: boolean;
  likes: Int; */



  constructor(public rest:ServiceComponent, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDeals();
  }

  getDeals() {
    this.deals = [];
    this.rest.getDeals().subscribe((data: {}) => { console.log(data); this.deals = data;});

  /*  this.info =             models.CharField(default='', max_length=200, unique=True)
    this.picture =          models.ImageField(upload_to='deals/', blank=True)
    this.been_liked =       models.ManyToManyField(User, related_name="liked-by+")
    this.been_disliked =    models.ManyToManyField(User, related_name="disliked-by+")
    this.likes =            models.IntegerField(default=1)
    this.url =              models.URLField(blank=True)
    this.category =         models.CharField(default='', choices=CATEGORY_CHOICES, max_length=50)
    this.slug =             models.SlugField(unique=True)
    this.address = */
  }

  add() {
    this.router.navigate(['/submit']);
  }

  delete(id) {
    this.rest.deleteDeal(id)
      .subscribe(res => {
          this.getDeals();
        }, (err) => {
          console.log(err);
        }
      );
  }

}


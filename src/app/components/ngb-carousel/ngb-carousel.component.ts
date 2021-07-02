import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css'],
  providers : [NgbCarouselConfig]
})
export class NgbCarouselComponent implements OnInit {


  showNavigationArrows = true;

  constructor(config: NgbCarouselConfig) {
 // customize default values of carousels used by this component tree
 config.showNavigationArrows = true;

   }
  images = [
  '../../../assets/img/bg-2.jpg',
  '../../../assets/img/bg.jpg',
  ];
  ngOnInit(): void {

  }

}

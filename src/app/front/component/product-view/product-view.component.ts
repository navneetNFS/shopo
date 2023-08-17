import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  selectedValue:string = '';
  currentRate = 3
  writeRate = 0;
  writeReview:boolean = false;
  showBtnWriteReview:boolean = false;

  foods: Food[] = [
    {value: 'small', viewValue: 'Small'},
    {value: 'large', viewValue: 'Medium'},
    {value: 'medium', viewValue: 'Large'},
    {value: 'extra-large', viewValue: 'Extra Large'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: any = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items:4,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }

  showWriteReview(){
    this.writeReview = !this.writeReview;
    this.showBtnWriteReview = !this.showBtnWriteReview;
  }

}

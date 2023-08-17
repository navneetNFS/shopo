import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShopoCrudService } from 'src/app/shared/shopo-crud.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeBannerComponent implements OnInit {

  baseImageUrl = environment.baseImageUrl

  Banners:any = [];
  constructor(private restApi: ShopoCrudService) { }

  ngOnInit(): void {
    this.restApi.GetBanner().subscribe(res => {
      console.log("Banner Data")
      console.log(res)
      this.Banners=res;
    });
  }
  customOptions: any = {
    loop: true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    items:1,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: true
  }

}

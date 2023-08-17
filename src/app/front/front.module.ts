import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';

import { FrontComponent } from './front.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeBannerComponent } from './partials/home-banner/home-banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DesktopTopMenuComponent } from './shared/partials/desktop-top-menu/desktop-top-menu.component';
import { DesktopMiddleMenuComponent } from './shared/partials/desktop-middle-menu/desktop-middle-menu.component';
import { HomeShopBrandComponent } from './partials/home-shop-brand/home-shop-brand.component';
import { HomeTopSellingProductComponent } from './partials/home-top-selling-product/home-top-selling-product.component';
import { HomeSaleCountdownComponent } from './partials/home-sale-countdown/home-sale-countdown.component';
import { HomeNewArrivalsComponent } from './partials/home-new-arrivals/home-new-arrivals.component';
import { HomeBestSellersComponent } from './partials/home-best-sellers/home-best-sellers.component';
import { HomePopularSaleComponent } from './partials/home-popular-sale/home-popular-sale.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { TermAndConditionComponent } from './component/term-and-condition/term-and-condition.component';



@NgModule({
  declarations: [
    FrontComponent,
    HomeComponent,
    HeaderComponent,
    HomeBannerComponent,
    DesktopTopMenuComponent,
    DesktopMiddleMenuComponent,
    HomeShopBrandComponent,
    HomeTopSellingProductComponent,
    HomeSaleCountdownComponent,
    HomeNewArrivalsComponent,
    HomeBestSellersComponent,
    HomePopularSaleComponent,
    FooterComponent,
    ProductListComponent,
    ProductViewComponent,
    TermAndConditionComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    CarouselModule,
    MaterialModule,
    BootstrapModule
  ]
})
export class FrontModule { }

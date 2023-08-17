import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-sale-countdown',
  templateUrl: './home-sale-countdown.component.html',
  styleUrls: ['./home-sale-countdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeSaleCountdownComponent implements OnInit {
  responseData = [
    {
      title: 'Notification',
      type: 'manual',
      sent: '2023-07-30 22:32:00',
      msg: 'welcome, this is notification Text',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Call the updateData function every second
    setInterval(() => {
      this.updateData();
    }, 1000);
  }

  updateData() {
    // Generate new notification data
    const newNotification = {
      title: 'notification',
      type: 'manual',
      sent: this.getCurrentDateTime(),
      msg: 'New notification text',
    };

    // Update the responseData array with the new notification
    this.responseData.push(newNotification);
  }

  calculateDiff(dateSent: string): SafeHtml {
    const currentDate = new Date();
    const dateSentObj = new Date(dateSent);

    const diffInMilliseconds = dateSentObj.getTime() - currentDate.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    const days = Math.floor(diffInSeconds / (3600 * 24));
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    const htmlString = `
    <span class="count_main">
      <span class="counter day">${days}</span>
      Days
    </span>
    <span class="count_main">
      <span class="counter hours">${hours}</span>
      Hours
    </span>
    <span class="count_main">
      <span class="counter minutes">${minutes}</span>
      Minutes
    </span>
    <span class="count_main">
      <span class="counter seconds">${seconds}</span>
      Seconds
    </span>`;
    return this.sanitizer.bypassSecurityTrustHtml(htmlString);
  }

  getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hours = ('0' + currentDate.getHours()).slice(-2);
    const minutes = ('0' + currentDate.getMinutes()).slice(-2);
    const seconds = ('0' + currentDate.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  customOptions: any = {
    loop: true,
    autoplay:true,
    autoplayTimeout:5000,
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

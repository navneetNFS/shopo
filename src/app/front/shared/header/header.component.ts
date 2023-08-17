import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    window.onscroll = function () { myFunction() };

    // fixed header
    var header:any = document.getElementById("middleHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    }
  }

}

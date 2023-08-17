import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss','../scss/front/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FrontComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.document.body.classList.add('frontend');
    this.document.body.classList.remove("mat-typography")
  }

}

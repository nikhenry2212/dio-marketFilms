import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {
  disabled: boolean = false;

  constructor(private checkoutService: CheckoutService) { }

  unSelectFilm(){
    this.disabled = false;
    this.checkoutService.unSelectFilms();
  }

  selectFilm(){
    this.disabled = true;
    this.checkoutService.selectFilms();
  }

  ngOnInit(): void {
  }

}

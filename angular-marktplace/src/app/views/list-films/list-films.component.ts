import { Film } from './film.model';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {

  listFilms: Film[] = [];
  listSelectedFilms: number = 0;
  hidden: boolean = false;
  constructor(
    private checkoutService: CheckoutService,
    private route : Router,
  ) { }

  ngOnInit(): void {
    this.checkoutService.totalPrice=0;
    this.checkoutService.listFilmsSelect = [];
    this.checkoutService.getListFilms().subscribe((film: Film[]): void => {
      this.listFilms = film;
    })
  }

  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;

  }
  toggleCount(){
    return this.listSelectedFilms = this.checkoutService.listFilmsSelect.length;
  }
  toCheckout(){
    this.route.navigate(['/checkout'])
  }
}

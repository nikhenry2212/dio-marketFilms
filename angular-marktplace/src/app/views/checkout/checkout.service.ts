import { MatSnackBar } from '@angular/material/snack-bar';
import { Film } from './../list-films/film.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  public baseUrl:string = 'http://localhost:3001';
  public listFilms: Film[] = [];
  public totalPrice: number=0;
  public listFilmsSelect: Film[] = [];

  private _priceHandler: number = 0;

  private _filmHandler!: Film;

  getFilm():Film {
    return this._filmHandler;
  }
  setFilm(value: Film): void {
    this._filmHandler = value;
  }

  getPrice(): number { 
    return this._priceHandler;

  }
  setPrice(price:number){
    this._priceHandler = price;
  }
  showMessage(message:string, isError: boolean = false){ 
    this.snackBar.open(message, 'X', {
      duration:3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['success'] : ['error'],
    });
  }

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  getListFilms() : Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.baseUrl+'/films')
  }
  selectFilms(){
    setTimeout(()=>{
    this.totalPrice += this.getPrice();
    this.listFilmsSelect.push(this.getFilm())
    console.log(this.listFilmsSelect);
    

    },1)
    
  }
  
  unSelectFilms(){
    this.totalPrice -= this.getPrice();
    if(this.totalPrice < 0){
      this.totalPrice = 0;
    }
    let index = this.listFilmsSelect.indexOf(this.getFilm());
    if(index > -1 || index === this.listFilmsSelect.indexOf(this.getFilm())){
      this.listFilmsSelect.splice(index, 1);
    }
    console.log(this.listFilmsSelect);


  }
}

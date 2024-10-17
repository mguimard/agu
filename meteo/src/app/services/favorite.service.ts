import { inject, Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { firstValueFrom, Subject } from 'rxjs';
import { Result } from '../model/result';

const STORE = 'favorites'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  db = inject(NgxIndexedDBService)
  favorites$ = new Subject<Result[]>()
  private favorites : Result[] = []

  constructor(){
    this.init();
  }

  async init(){
   this.favorites = await firstValueFrom(this.db.getAll(STORE))
   this.notify()
  }

  isFavorite(id: number) : boolean {
    return this.favorites.filter(f => f.id === id).length > 0
  }

  async setAsfavorite(data: Result){
    try{
      await firstValueFrom(this.db.add(STORE, data))
      this.favorites.push(data)
      this.notify()
    } catch(e:any){
      console.log(e.srcElement.error)
    }
  }

  async removeFromFavorites(id:number){
    try{
      firstValueFrom(this.db.delete(STORE,id))
      this.favorites = this.favorites.filter(f => f.id !== id)
      this.notify()
    } catch(e:any){
      console.log(e.srcElement.error)
    }
  }

  notify(){
    this.favorites$.next(this.favorites)
  }

 
}

class PourLeUserException extends Error {
  technicalError:any;
  override message:string;

  constructor(e:any, message: string){
    super()
    this.technicalError = e
    this.message = message
  }
}

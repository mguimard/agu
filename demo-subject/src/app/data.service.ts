import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tuyau$ : Subject<string[]> = new Subject<string[]>()
  private data: string[] = []

  ajoute(text: string){
    this.data.push(text)
    this.tuyau$.next(this.data)
  }

}

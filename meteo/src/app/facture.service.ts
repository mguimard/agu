import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface Facture {
  id: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  http = inject(HttpClient)
  constructor() { }

  getFacture(id: number) {
    return this.http.get<Facture>(`/api/factures/${id}`).toPromise
  }
  createFacture(facture: Facture) {
    return this.http.post<Facture>(`/api/factures`, facture)
  }
  updateFacture(facture: Facture) {
    return this.http.put<Facture>(`/api/factures/${facture.id}`, facture)
  }
  deleteFacture(id:number){
    return this.http.delete(`/api/factures/${id}`)
  }

}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  _albumUrl : string = "../assets/album.json";

  getAlbum(id : number) : Observable<any> {
    return this._http.get(this._albumUrl);
  }
}

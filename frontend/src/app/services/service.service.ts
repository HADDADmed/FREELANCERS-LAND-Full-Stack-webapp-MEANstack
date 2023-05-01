
import { Injectable } from '@angular/core';
import { Service } from '../shared/models/Service';
import { sample_SErvices } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVICES_BY_SEARCH_URL, SERVICES_URL, SERVICE_BY_ID_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }
  getAll(): Observable<Service[]> {
    return this.http.get<Service[]>(SERVICES_URL);
  }
  getServiceBySearchTearm(searchTerm:string): Observable<Service[]> {
       return this.http.get<Service[]>(SERVICES_BY_SEARCH_URL+searchTerm)
  }
  getServiceById(serviceId:string):Observable<Service>{
        return this.http.get<Service>(SERVICE_BY_ID_URL+serviceId)

  }
}

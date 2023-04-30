
import { Injectable } from '@angular/core';
import { Service } from '../shared/models/Service';
import { sample_SErvices } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getAll():Service[] {
    return sample_SErvices;
  }
  getServiceBySearchTearm(searchTerm:string):Service[] {
       return this.getAll().filter(service=>service.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getServiceById(serviceId:string):Service{
        return this.getAll().find((service=> service.id ==serviceId ))?? new Service();

  }
}

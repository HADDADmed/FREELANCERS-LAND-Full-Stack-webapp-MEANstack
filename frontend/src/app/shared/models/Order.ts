import { LatLng } from "leaflet";
import { Service } from "./Service";

export class Order {
  _id!: string;
  name!: string;
  items!: Service[];
  totalPrice!: number;
  addressLatlng!: LatLng  ;
  address!: string;
  paymentId!: string;
  createdAt!: Date;
  status!: string;

}

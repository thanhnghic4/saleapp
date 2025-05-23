export interface ICustomer {
  timestamp: number;
  Year: number;
  Month: number;
  Day: number;
  Name: string;
  Phone: number;
  Address: string;
  Description: string;
}

export interface IProduct {
  timestamp: number;
  Year: number;
  Month: number;
  Day: number;
  Name: string;
  Code: string;
  importPrice: number;
  sellingPrice: number;
  Address: string;
  Description: string;
}

export interface IOrder {
  timestamp: number;
  Year: number;
  Month: number;
  Day: number;
  CustomerName: string;
  CustomerPhone: string;
  Status: string;
  Id: string;
  description: string;
  detail: string;
}

export interface IOrderDetail {
  timestamp: number;
  Year: number;
  Month: number;
  Day: number;
  CustomerName: string;
  CustomerPhone: string;
  Status: string;
  importPrice: number;
  sellingPrice: number;
  profitPrice: number;
  productName: string;
  quantity: number;
  description: string;
  detail: string;
  orderDBId: string;
}

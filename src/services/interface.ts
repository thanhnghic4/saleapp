export interface ICustomer {
  timestamp: number;
  year: number;
  month: number;
  day: number;
  name: string;
  phone: number;
  address: string;
  description: string;
}

export interface ICreateCustomer {
  name: string;
  phone: number;
  address: string;
  description: string;
}

export interface IProduct {
  timestamp: number;
  year: number;
  month: number;
  day: number;
  name: string;
  code: string;
  importPrice: number;
  description: string;
}

export interface IOrder {
  timestamp: number;
  year: number;
  month: number;
  day: number;
  customerName: string;
  customerPhone: string;
  status: string;
  id: string;
  description: string;
  detail: string;
}

export interface IOrderDetail {
  timestamp: number;
  year: number;
  month: number;
  day: number;
  customerName: string;
  customerPhone: string;
  status: string;
  description: string;
  importPrice: number;
  sellingPrice: number;
  profitPrice: number;
  productName: string;
  quantity: number;
  detail: string;
  orderDBId: string;
}

export interface ICreateOrder {
  id?: string;
  order: {
    customerName: string;
    customerPhone: string;
    status?: string; // e.g., "active", "deleted"
    description?: string;
    detail?: string;
  };
  orderDetail: {
    Description?: string;
    ImportPrice: number;
    SellingPrice: number;
    ProductName: string;
    Quantity: number;
    Detail?: string;
  }[];
}

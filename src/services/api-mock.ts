import type { ICustomer } from "./interface";

const FakeCustomerList = [
  {
    name: "Nguyễn Văn A",
    phone: 123456789,
    address: "123 Đường A",
    description: "Khách VIP",
    timestamp: Date.now(),
    year: 2025,
    month: 5,
    day: 26,
  },
  {
    name: "Nguyễn Văn B",
    phone: 2222,
    address: "123 Đường A",
    description: "Khách VIP",
    timestamp: Date.now(),
    year: 2025,
    month: 5,
    day: 26,
  },
];

export const getAllCustomer = async (): Promise<ICustomer[]> => {
  return FakeCustomerList;
};

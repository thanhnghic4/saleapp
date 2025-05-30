export type RouterType =
  | "main"
  | "order"
  | "product"
  | "customer"
  | "report"
  | "login";

export interface IMenuItem {
  name: string;
  path: RouterType;
}

export const MENU: IMenuItem[] = [
  {
    name: "Home",
    path: "main",
  },
  {
    name: "Tạo Đơn hàng",
    path: "order",
  },
  {
    name: "Quản lý khách hàng",
    path: "customer",
  },
  {
    name: "Quản lý sản phẩm",
    path: "product",
  },
  {
    name: "Báo cáo",
    path: "report",
  },
];

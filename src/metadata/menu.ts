export type RouterType = "main" | "order" | "product" | "customer" | "report";

export interface IMenuItem {
  name: string;
  path: RouterType;
}

export const MENU: IMenuItem[] = [
  {
    name: "Tạo Đơn hàng",
    path: "main",
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

// @ts-nocheck

import type { ICreateCustomer } from "./interface";

const GOOGLE_SCRIPT_TIMEOUT = 10000;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NoDataType = any;
const executeGoogleScript = async <T, Q>(
  functionName: string,
  params: T
): Promise<Q> => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Google Script call timed out."));
    }, GOOGLE_SCRIPT_TIMEOUT);

    const runner = window.google?.script.run;
    if (!runner || !(functionName in runner)) {
      clearTimeout(timeout);
      return reject(new Error("Google Apps Script function not found."));
    }

    runner
      .withSuccessHandler((data: Q) => {
        clearTimeout(timeout);
        resolve(data);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .withFailureHandler((err: any) => {
        clearTimeout(timeout);
        reject(err);
      })
      ?.[functionName](params);
  });
};

export const createCustomer = async (
  newCustomer: ICreateCustomer
): Promise<boolean> => {
  return executeGoogleScript<ICreateCustomer, boolean>(
    "createCustomer",
    newCustomer
  );
};

export const getAllCustomer = async (): Promise<ICustomer[]> => {
  return executeGoogleScript<NoDataType, ICustomer[]>(
    "createCustomer",
    newCustomer
  );
};

export const getDetailCustomer = async (phone: number): Promise<ICustomer> => {
  return executeGoogleScript<number, ICustomer>("getDetailCustomer", phone);
};

export const getListGroupProduct = async (): Promise<string[]> => {
  return executeGoogleScript<ICreateCustomer, string[]>("getAllCustomer", null);
};

export const createOrder = async (newOrder: ICreateOrder): Promise<string> => {
  return executeGoogleScript<ICreateOrder, string[]>("createOrder", newOrder);
};

export const updateOrder = async (
  orderData: ICreateOrder
): Promise<boolean> => {
  return executeGoogleScript<ICreateOrder, string[]>("updateOrder", orderData);
};

export const getOrderByIds = async (
  orderIds: string
): Promise<
  {
    order: IOrder;
    orderDetail: IOrderDetail;
  }[]
> => {
  return executeGoogleScript<
    string,
    {
      order: IOrder;
      orderDetail: IOrderDetail;
    }[]
  >("getOrderByIds", orderIds);
};

export const deleteOrder = async (id: string): Promise<boolean> => {
  return executeGoogleScript<string, boolean>("deleteOrder", id);
};

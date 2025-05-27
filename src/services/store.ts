import type { ICustomer } from "./interface";
import { getAllCustomer } from "./api-mock";
import { useEffect } from "react";

export class AppStorage {
  private static instance: AppStorage;

  private customerList: ICustomer[] = [];

  // Make constructor private to prevent direct instantiation
  private constructor() {
    console.log("Singleton instance created");
  }
  public static getInstance(): AppStorage {
    if (!AppStorage.instance) {
      AppStorage.instance = new AppStorage();
    }
    return AppStorage.instance;
  }

  async fetchCustomer() {
    this.customerList = await getAllCustomer();
  }

  get AllCustomer() {
    return this.customerList;
  }
}

export const useAppInit = () => {
  useEffect(() => {
    AppStorage.getInstance().fetchCustomer();
  }, []);
};

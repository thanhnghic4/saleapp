import type {
  ICreateCustomer,
  ICreateOrder,
  ICustomer,
} from "../services/interface";
import CorePage from "./core";
import React, { useEffect, useState } from "react";
import "./order.css";
import { AppStorage } from "../services";

export default function OrderPage() {
  useEffect(() => {
    console.log("hi");
    console.log(AppStorage.getInstance().AllCustomer);
  }, []);
  return (
    <CorePage>
      <div className="order-page-body">
        <div className="left"></div>
        <div className="mid"></div>
        <div className="right"></div>
      </div>
    </CorePage>
  );
}

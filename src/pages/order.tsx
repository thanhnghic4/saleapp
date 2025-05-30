import type {
  ICreateCustomer,
  ICreateOrder,
  ICustomer,
} from "../services/interface";
import CorePage from "./core";
import React, { useEffect, useState } from "react";
import "./order.css";
import { AppStorage } from "../services";
import CustomForm from "../components/ui/form";

export default function OrderPage() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    console.log("hi");
    console.log(AppStorage.getInstance().AllCustomer);
  }, []);

  return (
    <CorePage>
      <div className="order-page-body">
        <div className="left"></div>
        <div className="mid">
          <CustomForm onSubmit={submitCustomer}>
            <h2>Create Order</h2>
            <label>
              Name:
              <input
                type="number"
                name="phone"
                value={customer.name}
                onChange={handleChange}
                required
              />
            </label>
          </CustomForm>
        </div>
        <div className="right"></div>
      </div>
    </CorePage>
  );
}

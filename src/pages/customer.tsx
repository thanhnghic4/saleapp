import { useState } from "react";
import CorePage from "./core";
import type { ICustomer } from "../services/interface";
import CustomerForm from "../components/customerForm/customer";

const CustomerPage: React.FC = () => {
  const [customer, setCustomer] = useState<ICustomer>({
    timestamp: Date.now(),
    Year: new Date().getFullYear(),
    Month: new Date().getMonth() + 1,
    Day: new Date().getDate(),
    Name: "",
    Phone: 0,
    Address: "",
    Description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: name === "Phone" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customer created:", customer);
    // Add logic to save customer
  };

  return (
    <CorePage>
      <CustomerForm />
    </CorePage>
  );
};

export default CustomerPage;

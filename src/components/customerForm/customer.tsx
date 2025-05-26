import { useState } from "react";
import type { ICustomer } from "../../services/interface";
import "./customer.css";
import { Api } from "../../services";

const CustomerForm: React.FC = () => {
  const [customer, setCustomer] = useState<ICustomer>({
    timestamp: Date.now(),
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    name: "",
    phone: 0,
    address: "",
    description: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customer created:", customer);
    // Add logic to save customer
    const result = await Api.createCustomer(customer);
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <h2>Create Customer</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="number"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={customer.description}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;

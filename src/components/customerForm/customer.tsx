import { useState } from "react";
import type { ICustomer } from "../../services/interface";
import "./customer.css";

const CustomerForm: React.FC = () => {
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
    <form onSubmit={handleSubmit} className="customer-form">
      <h2>Create Customer</h2>

      <label>
        Name:
        <input
          type="text"
          name="Name"
          value={customer.Name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone:
        <input
          type="number"
          name="Phone"
          value={customer.Phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="Address"
          value={customer.Address}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="Description"
          value={customer.Description}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;

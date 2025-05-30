import { useState } from "react";
import { login } from "../services/api";
import CorePage from "./core";
import type { ILoginData } from "../services/interface";

export default function LoginPage() {
  const [formData, setFormData] = useState<ILoginData>({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Submitted:", formData);
    login(formData);
  };
  return (
    <CorePage>
      return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      );
    </CorePage>
  );
}

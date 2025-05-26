import type { ICreateCustomer, ICustomer } from "../services/interface";
import CorePage from "./core";
import React, { useEffect, useState } from "react";

// Dummy APIs (replace with actual API calls)
async function getAllCustomer(): Promise<ICustomer[]> {
  // Replace this with your real API call (App Script fetch)
  return [
    {
      name: "Nguyễn Văn A",
      phone: 123456789,
      address: "123 Đường A",
      description: "Khách VIP",
      timestamp: Date.now(),
      year: 2025,
      month: 5,
      day: 26,
    },
  ];
}

async function getDetailCustomer(phone: string): Promise<ICustomer | null> {
  const all = await getAllCustomer();
  return all.find((c) => c.phone.toString() === phone) ?? null;
}

async function createCustomerAPI(customer: ICreateCustomer): Promise<void> {
  console.log("Tạo khách hàng:", customer);
  // Gọi API App Script ở đây
}

export default function OrderPage() {
  const [allCustomers, setAllCustomers] = useState<ICustomer[]>([]);
  const [phone, setPhone] = useState("");
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [checking, setChecking] = useState(false);
  const [showCreateCustomer, setShowCreateCustomer] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [createCustomerForm, setCreateCustomerForm] = useState<ICreateCustomer>(
    {
      name: "",
      phone: 0,
      address: "",
      description: "",
    }
  );

  // Load danh sách khách hàng khi mount
  useEffect(() => {
    async function fetchCustomers() {
      const res = await getAllCustomer();
      setAllCustomers(res);
    }
    fetchCustomers();
  }, []);

  const handleCheckCustomer = async () => {
    setChecking(true);
    const res = await getDetailCustomer(phone);
    if (res) {
      setCustomer(res);
      setShowCreateCustomer(false);
      setShowOrderForm(true);
    } else {
      setShowCreateCustomer(true);
      setShowOrderForm(false);
    }
    setChecking(false);
  };

  const handleCreateCustomer = async () => {
    await createCustomerAPI(createCustomerForm);
    const res = await getDetailCustomer(createCustomerForm.phone.toString());
    if (res) {
      setCustomer(res);
      setShowCreateCustomer(false);
      setShowOrderForm(true);
    }
  };

  return (
    <CorePage>
      <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
        <h2>Tạo Đơn Hàng</h2>

        {/* Nhập SĐT khách hàng */}
        <label>
          Số điện thoại khách hàng:
          <input
            list="customer-suggestions"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <datalist id="customer-suggestions">
          {allCustomers.map((cus) => (
            <option key={cus.phone} value={cus.phone}>
              {cus.name} - {cus.phone}
            </option>
          ))}
        </datalist>

        <button type="button" onClick={handleCheckCustomer} disabled={checking}>
          {checking ? "Đang kiểm tra..." : "Kiểm tra khách hàng"}
        </button>

        {/* Thông tin khách đã tồn tại */}
        {customer && (
          <div style={{ marginTop: 10 }}>
            ✅ <strong>{customer.name}</strong> đã tồn tại.
          </div>
        )}

        {/* Form tạo khách hàng mới */}
        {showCreateCustomer && (
          <div style={{ border: "1px solid gray", padding: 10, marginTop: 10 }}>
            <h3>Khách chưa tồn tại – Tạo mới:</h3>
            <label>
              Tên:
              <input
                value={createCustomerForm.name}
                onChange={(e) =>
                  setCreateCustomerForm((p) => ({ ...p, name: e.target.value }))
                }
                required
              />
            </label>
            <label>
              Số điện thoại:
              <input
                value={createCustomerForm.phone}
                onChange={(e) =>
                  setCreateCustomerForm((p) => ({
                    ...p,
                    phone: Number(e.target.value),
                  }))
                }
                required
              />
            </label>
            <label>
              Địa chỉ:
              <input
                value={createCustomerForm.address}
                onChange={(e) =>
                  setCreateCustomerForm((p) => ({
                    ...p,
                    address: e.target.value,
                  }))
                }
              />
            </label>
            <label>
              Mô tả:
              <input
                value={createCustomerForm.description}
                onChange={(e) =>
                  setCreateCustomerForm((p) => ({
                    ...p,
                    description: e.target.value,
                  }))
                }
              />
            </label>
            <button type="button" onClick={handleCreateCustomer}>
              Tạo Khách Hàng
            </button>
          </div>
        )}

        {/* Form tạo đơn hàng */}
        {showOrderForm && (
          <div style={{ marginTop: 20 }}>
            <h3>📦 Tạo đơn hàng cho: {customer?.name}</h3>
            {/* Bạn có thể render form theo interface ICreateOrder ở đây */}
            {/* Ví dụ: <CreateOrderForm customer={customer} /> */}
          </div>
        )}
      </div>
    </CorePage>
  );
}

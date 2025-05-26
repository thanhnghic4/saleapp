import type {
  ICreateCustomer,
  ICreateOrder,
  ICustomer,
} from "../services/interface";
import CorePage from "./core";
import React, { useEffect, useState } from "react";

async function getAllCustomer(): Promise<ICustomer[]> {
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
}

async function createOrderAPI(order: ICreateOrder): Promise<void> {
  console.log("Tạo đơn hàng:", order);
}

export default function OrderPage() {
  const [allCustomers, setAllCustomers] = useState<ICustomer[]>([]);
  const [phone, setPhone] = useState("");
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [showCreateCustomer, setShowCreateCustomer] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [newCustomer, setNewCustomer] = useState<ICreateCustomer>({
    name: "",
    phone: 0,
    address: "",
    description: "",
  });

  const [orderDescription, setOrderDescription] = useState("");
  const [orderDetails, setOrderDetails] = useState<ICreateOrder["orderDetail"]>(
    [
      {
        ProductName: "",
        ImportPrice: 0,
        SellingPrice: 0,
        Quantity: 1,
      },
    ]
  );

  useEffect(() => {
    async function fetchCustomers() {
      const res = await getAllCustomer();
      setAllCustomers(res);
    }
    fetchCustomers();
  }, []);

  const handleCheckCustomer = async () => {
    const res = await getDetailCustomer(phone);
    if (res) {
      setCustomer(res);
      setShowCreateCustomer(false);
      setShowOrderForm(true);
    } else {
      setCustomer(null);
      setShowCreateCustomer(true);
      setShowOrderForm(false);
    }
  };

  const handleCreateCustomer = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCustomerAPI(newCustomer);
    const res = await getDetailCustomer(newCustomer.phone.toString());
    if (res) {
      setCustomer(res);
      setShowCreateCustomer(false);
      setShowOrderForm(true);
    }
  };

  const handleAddDetail = () => {
    setOrderDetails((prev) => [
      ...prev,
      {
        ProductName: "",
        ImportPrice: 0,
        SellingPrice: 0,
        Quantity: 1,
      },
    ]);
  };

  const handleChangeDetail = (
    index: number,
    field: string,
    value: string | number
  ) => {
    setOrderDetails((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer) return;
    const order: ICreateOrder = {
      order: {
        customerName: customer.name,
        customerPhone: customer.phone.toString(),
        description: orderDescription,
        status: "active",
      },
      orderDetail: orderDetails,
    };
    await createOrderAPI(order);
    alert("Tạo đơn hàng thành công!");
  };

  return (
    <CorePage>
      <form className="order-check-form">
        <h2>Tạo Đơn Hàng</h2>

        <label>
          Số điện thoại:
          <input
            list="customer-suggestions"
            type="number"
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

        <button type="button" onClick={handleCheckCustomer}>
          Kiểm tra khách hàng
        </button>
      </form>

      {showCreateCustomer && (
        <form onSubmit={handleCreateCustomer} className="customer-form">
          <h3>Tạo Khách Hàng Mới</h3>

          <label>
            Tên:
            <input
              type="text"
              name="name"
              value={newCustomer.name}
              onChange={(e) =>
                setNewCustomer((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </label>

          <label>
            Số điện thoại:
            <input
              type="number"
              name="phone"
              value={newCustomer.phone}
              onChange={(e) =>
                setNewCustomer((prev) => ({
                  ...prev,
                  phone: Number(e.target.value),
                }))
              }
              required
            />
          </label>

          <label>
            Địa chỉ:
            <input
              type="text"
              name="address"
              value={newCustomer.address}
              onChange={(e) =>
                setNewCustomer((prev) => ({ ...prev, address: e.target.value }))
              }
              required
            />
          </label>

          <label>
            Mô tả:
            <textarea
              name="description"
              value={newCustomer.description}
              onChange={(e) =>
                setNewCustomer((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </label>

          <button type="submit">Tạo Khách Hàng</button>
        </form>
      )}

      {showOrderForm && customer && (
        <form onSubmit={handleSubmitOrder} className="order-form">
          <h3>Thông tin đơn hàng</h3>

          <label>
            Tên khách:
            <input type="text" value={customer.name} readOnly />
          </label>

          <label>
            Số điện thoại:
            <input type="text" value={customer.phone} readOnly />
          </label>

          <label>
            Mô tả đơn hàng:
            <textarea
              value={orderDescription}
              onChange={(e) => setOrderDescription(e.target.value)}
            />
          </label>

          <h4>Danh sách sản phẩm</h4>
          {orderDetails.map((detail, idx) => (
            <div key={idx}>
              <label>
                Tên SP:
                <input
                  type="text"
                  value={detail.ProductName}
                  onChange={(e) =>
                    handleChangeDetail(idx, "ProductName", e.target.value)
                  }
                  required
                />
              </label>
              <label>
                Giá nhập:
                <input
                  type="number"
                  value={detail.ImportPrice}
                  onChange={(e) =>
                    handleChangeDetail(
                      idx,
                      "ImportPrice",
                      Number(e.target.value)
                    )
                  }
                  required
                />
              </label>
              <label>
                Giá bán:
                <input
                  type="number"
                  value={detail.SellingPrice}
                  onChange={(e) =>
                    handleChangeDetail(
                      idx,
                      "SellingPrice",
                      Number(e.target.value)
                    )
                  }
                  required
                />
              </label>
              <label>
                SL:
                <input
                  type="number"
                  value={detail.Quantity}
                  onChange={(e) =>
                    handleChangeDetail(idx, "Quantity", Number(e.target.value))
                  }
                  required
                />
              </label>
            </div>
          ))}

          <button type="button" onClick={handleAddDetail}>
            + Thêm sản phẩm
          </button>

          <button type="submit">Tạo Đơn Hàng</button>
        </form>
      )}
    </CorePage>
  );
}

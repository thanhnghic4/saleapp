import CorePage from "./core";
import CustomerForm from "../components/customerForm/customer";

const CustomerPage: React.FC = () => {
  return (
    <CorePage>
      <CustomerForm />
    </CorePage>
  );
};

export default CustomerPage;

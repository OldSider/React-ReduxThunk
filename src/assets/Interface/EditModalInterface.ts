import Customers from "./HomeCustomerInterface";

interface EditCustomerModal {
  customer: Customers | undefined;
  setEditModal: () => void;
  openEditModal: boolean;
  customerId: number;
}

export default EditCustomerModal;

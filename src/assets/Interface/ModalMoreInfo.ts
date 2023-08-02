import Customers from "./HomeCustomerInterface";

interface ModalMoreInfoProps {
  isOpen: boolean;
  setOpenModal: () => void;
  selectedCustomer: Customers | undefined;
}

export default ModalMoreInfoProps;

interface EditCustomerModal {
  customer: number | undefined;

  setEditModal: () => void;
  openEditModal: boolean;
}

export default EditCustomerModal;

import { useState } from "react";

import EditCustomerModal from "../../../../../Interface/EditModalInterface";
import updateCustomer from "../../../../../Redux/Reducers/UpdateCustomer/Components/AsyncThunk";
import useAppDispatch from "../../../../../Hook/UseAppDispatch";

import "./Style/EditInfoModal.css";


function ModalEditInfo(props: EditCustomerModal) {
  const { openEditModal, customer, setEditModal } = props;
  const dispatch = useAppDispatch();
  const [editingCustomer, setEditingCustomer] = useState({
    ...customer,
  });

  const handleChange = (e, field) => {
    const { value } = e.target;
    setEditingCustomer((prevCustomer) => ({
      ...prevCustomer,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    if (customer && customer.id) {
      dispatch(
        updateCustomer({
          customerId: customer.id,
          customerData: editingCustomer,
        })
      );
      setEditModal();
    }
  };

  if (openEditModal) {
    return (
      <>
        <div>
          <p>
            <strong>ID: </strong>
            {editingCustomer.id}
          </p>
          <p>
            <strong>Full Name: {editingCustomer.fullName}</strong>
            <br />
            <input
              type="text"
              value={editingCustomer.fullName}
              onChange={(e) => handleChange(e, "fullName")}
            />
          </p>
        </div>
        <button></button>
        <button onClick={handleEdit}></button>
      </>
    );
  }
}

export default ModalEditInfo;

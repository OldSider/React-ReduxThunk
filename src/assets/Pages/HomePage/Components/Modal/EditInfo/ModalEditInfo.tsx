import { useState, ChangeEvent } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
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
        <div className="backgroundModalEdit">
          <div className="modalBlockEdit">
            <div>
              <p>
                <strong>Full Name:</strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.fullName}
                  onChange={(e) => handleChange(e, "fullName")}
                />
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.email}
                  onChange={(e) => handleChange(e, "email")}
                />
              </p>
              <p>
                <strong>Phone: </strong>
                <br />
                <input
                  type="number"
                  value={editingCustomer.userPhone}
                  onChange={(e) => handleChange(e, "userPhone")}
                />
              </p>
              <p>
                <strong>userId: </strong>
                <br />
                <input
                  type="number"
                  value={editingCustomer.userId}
                  onChange={(e) => handleChange(e, "userId")}
                />
              </p>
              <p>
                <strong>Gender: </strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.gender}
                  onChange={(e) => handleChange(e, "gender")}
                />
              </p>
              <p>
                <strong>Password: </strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.userPassword}
                  onChange={(e) => handleChange(e, "userPassword")}
                />
              </p>
              <p>
                <strong>Zip Code: </strong>
                <br />
                <input
                  type="number"
                  value={editingCustomer.userZipCode}
                  onChange={(e) => handleChange(e, "userZipCode")}
                />
              </p>
              <p>
                <strong>State: </strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.userState}
                  onChange={(e) => handleChange(e, "userState")}
                />
              </p>
              <p>
                <strong>City: </strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.userCity}
                  onChange={(e) => handleChange(e, "userCity")}
                />
              </p>
              <p>
                <strong>District:</strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.userDistrict}
                  onChange={(e) => handleChange(e, "userDistrict")}
                />
              </p>
              <p>
                <strong>House Number:</strong>
                <br />
                <input
                  type="text"
                  value={editingCustomer.userHouseNumber}
                  onChange={(e) => handleChange(e, "useHouseNumber")}
                />
              </p>
              <div className="button-Block">
                <button
                  className="modalBtnEdit"
                  onClick={() => {
                    setEditModal();
                  }}
                >
                  close
                </button>
                <button className="modalBtnEdit" onClick={handleEdit}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalEditInfo;

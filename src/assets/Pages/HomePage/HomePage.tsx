/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import getCustomersData from "../../Redux/Reducers/GetAllCustomers/Components/AsyncThunk";
import NewUseRegister from "./Components/RegisterNewUserButton/NewUseRegister";
import useAppDispatch from "../../Hook/UseAppDispatch";
import useAppSelector from "../../Hook/UseAppSelector";
import ModalMoreInfo from "./Components/Modal/MoreInfo/ModalMoreInfo";
import InputSearch from "./Components/InputSearch/InputSearch";
import ExitButton from "./Components/ExitButton/ExitButton";
import Customers from "../../Interface/HomeCustomerInterface";

import "./Components/Style/HomePage.css";

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  const [, setSelectedCustomerId] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState<Customers>();

  const dispatch = useAppDispatch();
  const searchInput = useAppSelector((state) => state.searchBar.search);
  const loading = useAppSelector((state) => state.getAll.loading);

  const customerData = useAppSelector(
    (state) => state.getAll.data
  ) as Customers[];

  useEffect(() => {
    dispatch(getCustomersData());
  }, [getCustomersData]);

  const filter = customerData.filter(
    (customer) =>
      customer.fullName.toLowerCase().includes(searchInput.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <section>
        <div className="wrapper-home">
          <div className="div-btn">
            <InputSearch />
            <NewUseRegister />
            <ExitButton />
          </div>
          {!loading ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filter.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.fullName}</td>
                      <td>{customer.email}</td>
                      <td>
                        <button
                          className="View-btn"
                          onClick={() => {
                            setSelectedCustomerId(customer.id);
                            setSelectedCustomer(customer);
                            setOpenModal(true);
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <section>
              <div className="load-block">
                <h1>Loading...</h1>
              </div>
            </section>
          )}
        </div>
      </section>
      <ModalMoreInfo
        isOpen={openModal}
        setOpenModal={() => {
          setOpenModal(!openModal);
        }}
        selectedCustomer={selectedCustomer}
      />
    </>
  );
}

export default HomePage;

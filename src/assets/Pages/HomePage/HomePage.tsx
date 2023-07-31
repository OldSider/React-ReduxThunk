import { useEffect, useState } from "react";

import getCustomersData from "../../Redux/Reducers/GetAllCustomers/Components/AsyncThunk";
import NewUseRegister from "./Components/RegisterNewUserButton/NewUseRegister";
import useAppDispatch from "../../Hook/UseAppDispatch";
import useAppSelector from "../../Hook/UseAppSelector";
import InputSearch from "./Components/InputSearch/InputSearch";
import ExitButton from "./Components/ExitButton/ExitButton";
import Customers from "../../Interface/HomeCustomerInterface";

function HomePage() {
  const [selectedCustomerId, setSelectedCustomerId] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState<Customers | undefined>();

  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.getAll.loading);
  const customerData = useAppSelector(
    (state) => state.getAll.data
  ) as Customers[];
  const searchInput = useAppSelector((state) => state.searchBar.search);

  useEffect(() => {
    dispatch(getCustomersData());
  }, [dispatch]);

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
            <input
              className="header-filter"
              type="text"
              placeholder="Search Customer"
              onChange={InputSearch}
            />

            <button className="header-btnAdd" onClick={NewUseRegister}>
              Add New Customer
            </button>

            <button className="header-btn" onClick={ExitButton}>
              Exit
            </button>
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
            <div>Loading...</div>
          )}
          
        </div>
      </section>
    </>
  );
}

export default HomePage;

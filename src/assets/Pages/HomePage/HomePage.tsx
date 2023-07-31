import { useEffect, useState } from "react";

import getCustomersData from "../../Redux/Reducers/GetAllCustomers/Components/AsyncThunk";
import useAppDispatch from "../../Hook/UseAppDispatch";
import useAppSelector from "../../Hook/UseAppSelector";
import Customers from "../../Interface/HomeCustomerInterface";

function HomePage() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
 
  const customerData = useAppSelector(
    (state) => state.getAll.data
  ) as Customers[];

  useEffect(() => {
    dispatch(getCustomersData());
  }, [getCustomersData]);

  const filter = customerData.filter(
    (customer) =>
      customer.fullName.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>home</div>
    </>
  );
}

export default HomePage;

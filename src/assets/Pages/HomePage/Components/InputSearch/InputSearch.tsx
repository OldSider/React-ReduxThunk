import useAppDispatch from "../../../../Hook/UseAppDispatch";

import { setSearch } from "../../../../Redux/Reducers/SearchCustomerInput/SearchPayload";

function InputSearch() {
  const dispatch = useAppDispatch();

  return (
    <>
      <input
        placeholder="Search Customer"
        type="text"
        className="header-filter"
        onChange={(event) => {
          dispatch(setSearch(event.target.value));
        }}
      />
    </>
  );
}

export default InputSearch;

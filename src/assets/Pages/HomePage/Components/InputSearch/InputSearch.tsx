import useAppDispatch from "../../../../Hook/UseAppDispatch";
import useAppSelector from "../../../../Hook/UseAppSelector";
import { setSearch } from "../../../../Redux/Reducers/SearchCustomerInput/SearchPayload";

function InputSearch() {
  const dispatch = useAppDispatch();
  const searchBar = useAppSelector((state) => {
    state.searchBar.search;
  });

  const InputSearchChange = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <>
      <input type="text" onChange={InputSearchChange} value={searchBar} />
    </>
  );
}

export default InputSearch;

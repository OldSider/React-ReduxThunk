import useAppDispatch from "../../../../../../../Hook/UseAppDispatch";
import { DeleteButtonProps } from "../../../../../../../Interface/DeleteCustomerInterface";
import deleteCustomer from "../../../../../../../Redux/Reducers/DeleteCustomer/Components/AsyncThunk";

function DeleteButton(props: DeleteButtonProps) {
  const dispatch = useAppDispatch();
  const customer = props.customer;
  const closeModal = props.openModal;

  const handleDelete = async () => {
    try {
      if (customer !== undefined) {
        await dispatch(deleteCustomer(customer));
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleDelete}>Delete Customer</button>
    </>
  );
}

export default DeleteButton;

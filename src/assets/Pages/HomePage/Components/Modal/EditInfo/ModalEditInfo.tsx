import EditCustomerModal from "../../../../../Interface/EditModalInterface";

function ModalEditInfo(props: EditCustomerModal) {
  const { openEditModal, customer, setEditModal } = props;

  if (openEditModal) {
    return (
      <>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          officiis itaque dolorum voluptas! Unde fugiat, eligendi recusandae
          velit iusto dolorum ad reiciendis voluptates expedita, esse quo
          debitis temporibus nam fugit.
        </div>
      </>
    );
  }
}

export default ModalEditInfo;

import React from "react";
import Button from "../../ui/Button";
import CreateDealerForm from "./CreateDealerForm";
import Modal from "../../ui/Modal";

function AddDealer() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="dealer-form">
          <Button>Add Data Plans</Button>
        </Modal.Open>

        <Modal.Window name="dealer-form">
          <CreateDealerForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>

      <Modal.Window name="table">
        <DealerTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}
// function AddDealer() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       {" "}
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Caibin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateDealerForm
//           onCloseModal={() => setIsOpenModal(false)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddDealer;

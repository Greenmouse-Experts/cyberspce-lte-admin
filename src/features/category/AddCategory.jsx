import React from "react";
import Button from "../../ui/Button";
import CreateCategoryForm from "./CreateCategoryForm";
import Modal from "../../ui/Modal";

function AddCategory() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Category</Button>
        </Modal.Open>

        <Modal.Window name="cabin-form">
          <CreateCategoryForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>

      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}
// function AddCategory() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       {" "}
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Caibin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCategoryForm
//           onCloseModal={() => setIsOpenModal(false)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCategory;

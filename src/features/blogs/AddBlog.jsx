import React from "react";
import Button from "../../ui/Button";
import CreateBlogForm from "./CreateBlogForm";
// import BlogTable from "./BlogTable";
import Modal from "../../ui/Modal";

function AddBlog() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="blog-form">
          <Button>Add new Blog</Button>
        </Modal.Open>

        <Modal.Window name="blog-form">
          <CreateBlogForm />
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
// function AddBlog() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       {" "}
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Caibin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm
//           onCloseModal={() => setIsOpenModal(false)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddBlog;

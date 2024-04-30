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
      </Modal>
    </div>
  );
}

export default AddCategory;

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
      </Modal>
    </div>
  );
}

export default AddDealer;

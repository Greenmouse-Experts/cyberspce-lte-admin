import React from "react";
import Button from "../../ui/Button";
import CreateDealerForm from "./CreatePlanForm";
import Modal from "../../ui/Modal";

function AddPlan() {
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

export default AddPlan;

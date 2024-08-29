import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateDealerForm from "./CreateBannerForm";

function AddBanner() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="dealer-form">
          <Button>Add Banner</Button>
        </Modal.Open>

        <Modal.Window name="dealer-form">
          <CreateDealerForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBanner;

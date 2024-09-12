import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBannerForm from "./CreateBreadcrumbForm";
import CreateBreadcrumbForm from "./CreateBreadcrumbForm";

function AddBreadcrumb() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="dealer-form">
          <Button>Add Breadcrumb</Button>
        </Modal.Open>

        <Modal.Window name="dealer-form">
        <CreateBreadcrumbForm/>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBreadcrumb;

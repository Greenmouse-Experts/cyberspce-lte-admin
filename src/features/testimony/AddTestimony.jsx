import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateTestimonyForm from "./CreateTestimonyForm";

function AddTestimonial() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="testimony-form">
          <Button>Add Testimonial</Button>
        </Modal.Open>

        <Modal.Window name="testimony-form">
          <CreateTestimonyForm/>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddTestimonial;

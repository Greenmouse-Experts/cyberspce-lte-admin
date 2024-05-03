import React from "react";
import Button from "../../ui/Button";
// import CreateDealerForm from "./CreateDealerForm";
import Modal from "../../ui/Modal";

function AddTestimonial() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="testimony-form">
          <Button>Add Testimonial</Button>
        </Modal.Open>

        <Modal.Window name="testimony-form">
          {/* <CreateTestimonialForm /> */}
          <></>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddTestimonial;

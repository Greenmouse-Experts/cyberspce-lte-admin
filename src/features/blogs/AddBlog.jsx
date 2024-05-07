import React from "react";
import Button from "../../ui/Button";
import CreateBlogForm from "./CreateBlogForm";
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

export default AddBlog;

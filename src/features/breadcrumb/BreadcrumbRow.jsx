import styled from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";
import CreateBreadcrumbForm from "./CreateBreadcrumbForm";
import Heading from "../../ui/Heading";
import { useDeleteBreadcrumb } from "./useDeleteBreadcrumb";

const BannerWrapper = styled.div``;

const BannerContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 2rem;
`;

const imageContainer = styled.div``;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;

function BreadcrumbRow({ breadcrumb }) {

   const { isDeleting, deleteBreadcrumb  } = useDeleteBreadcrumb();



  return (
    <BannerContainer>
      <imageContainer>
        <p>Image</p>
        <Image src={breadcrumb.image} />
      </imageContainer>
     
      <BannerWrapper>
        <div>{breadcrumb["title"]}</div>
        <div>{breadcrumb["subtitle"]}</div>
      </BannerWrapper>
     
      <div style={{marginLeft:'auto'}}>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={breadcrumb.id} />

            <Menus.List id={breadcrumb.id}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateBreadcrumbForm bannerToEdit={breadcrumb} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Breadcrumb"
                disabled={isDeleting}
                onConfirm={() => deleteBreadcrumb(breadcrumb.id)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </BannerContainer>
  );
}

export default BreadcrumbRow;

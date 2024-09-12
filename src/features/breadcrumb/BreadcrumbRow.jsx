import styled from "styled-components";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";
import CreateBreadcrumbForm from "./CreateBreadcrumbForm";
import Heading from "../../ui/Heading";

const BannerWrapper = styled.div``;

const BannerContainer = styled.div`
  display: flex;
  align-items:center;
  gap: 2rem;
`;

const imageContainer = styled.div``;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

function BreadcrumbRow({ breadcrumb }) {

  // const { isDeleting, deleteDealer } = useDeleteDealer();
console.log(breadcrumb)


  return (
    <BannerContainer>
      <imageContainer>
        <p>Image</p>
        <Image src={breadcrumb.image} />
      </imageContainer>
     
      <BannerWrapper>
        <div>{breadcrumb["title"]}</div>
        {/* <div>
          {" "}
          <Heading as="h3">{title[0]["secondTitle"]}</Heading>
        </div>
        <div>{title[0]["thirdTitle"]}</div> */}
        {/* <div>{region}</div>
  <div>{phone1}</div>
  <div>{phone2}</div> */}
      </BannerWrapper>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={1} />

            <Menus.List id={1}>
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
                onConfirm={() => deleteDealer("")}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </BannerContainer>
  );
}

export default BreadcrumbRow;

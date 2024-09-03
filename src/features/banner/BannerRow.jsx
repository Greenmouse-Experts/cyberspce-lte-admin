import styled from "styled-components";
import { useDeleteDealer } from "./useDeleteBanner";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";
import CreateBannerForm from "./CreateBannerForm";
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

function BannerRow({ banner }) {

  const { isDeleting, deleteDealer } = useDeleteDealer();
console.log(banner)

  const title = JSON.parse(banner.title);

  return (
    <BannerContainer>
      <imageContainer>
        <p>Background</p>
        <Image src={banner.background} />
      </imageContainer>
      <imageContainer>
        <p>Image</p>
        <Image src={banner.image} />
      </imageContainer>
      <BannerWrapper>
        <div>{title[0]["firstTitle"]}</div>
        <div>
          {" "}
          <Heading as="h3">{title[0]["secondTitle"]}</Heading>
        </div>
        <div>{title[0]["thirdTitle"]}</div>
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
              <CreateBannerForm bannerToEdit={banner} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Banner"
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

export default BannerRow;

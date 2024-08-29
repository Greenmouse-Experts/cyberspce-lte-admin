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
`;

const Image = styled.img``;

function BannerRow({ banner }) {
  const { isDeleting, deleteDealer } = useDeleteDealer();
  const formatType = {
    starter: "Starter Plans",
    holiday: "Holiday Packages",
    monthly_renewal: "Monthly Renewal Packages",
    extra_validity: "Extra Validity Plans",
  };
  // const {
  //   id: cabinId,
  //   name,
  //   address,
  //   region,
  //   phone1,
  //   phone2,
  //   created_at,
  // } = banner;

  return (
    <BannerContainer>
      <Image />
      <BannerWrapper>
        <div>Double Your Online Presence</div>
        <div>
          {" "}
          <Heading as="h3">Bundled Data Offers</Heading>
        </div>
        <div>Double Your Online Presence</div>
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
              <CreateBannerForm cabinToEdit={[]} />
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

import styled from "styled-components";
import { useDeleteBanner } from "./useDeleteBanner";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import CreateBannerForm from "./CreateBannerForm";
import Heading from "../../ui/Heading";

const BannerWrapper = styled.div``;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Image = styled.img`
  width: 250px;
  height: 150px;
`;

function BannerRow({ banner }) {
  const { isDeleting, deleteBanner } = useDeleteBanner();

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
      </BannerWrapper>
      <div style={{ marginLeft: "auto" }}>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={banner.id} />

            <Menus.List id={banner.id}>
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
                onConfirm={() => deleteBanner(banner.id)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </BannerContainer>
  );
}

export default BannerRow;

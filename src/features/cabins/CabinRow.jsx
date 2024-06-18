import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteProduct } from "./useDeleteCabin";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { BiEdit } from "react-icons/bi";
import UpdateCabinImages from "./UpdateCabinImages";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  padding-left: 10px;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Price = styled.div``;

function CabinRow({ cabin }) {
  const { isDeleting, deleteProd } = useDeleteProduct();

  const {
    id: cabinId,
    price,
    count_in_stock,
    category,
    product_name,
    display,
    images,
  } = cabin;

  // const handleDuplicate = () => {
  //   createCabin({
  //     name: `Copy of ${name}`,
  //     maxCapacity,
  //     regularPrice,
  //     discount,
  //     image,
  //   });
  // };
  const prodImages = JSON.parse(images)
  return (
    <Table.Row>
      <div>
      <Img src={prodImages[0]} size={12} />
      </div>
      <Cabin>{product_name}</Cabin>
      <Price>{formatCurrency(price)}</Price>
      <div>{category.name}</div>
      <div>{count_in_stock}</div>
      <div>
        {display === "1" ? (
          <div className="flex items-center text-green-600 gap-x-1">
            <span className="w-4 h-4 rounded-full bg-green-600"></span>
            <span>Active</span>
          </div>
        ) : (
          <div className="flex items-center text-orange-600 gap-x-1">
            <span className="w-4 h-4 rounded-full bg-orange-600"></span>
            <span>Inactive</span>
          </div>
        )}
      </div>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="update">
                <Menus.Button icon={<BiEdit />}>Update Images</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            <Modal.Window name="update">
              <UpdateCabinImages images={JSON.parse(images)} id={cabinId} />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Product"
                disabled={isDeleting}
                onConfirm={() => deleteProd(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;

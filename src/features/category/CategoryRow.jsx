import styled from "styled-components";
import CreateCabinForm from "./CreateCategoryForm";
import {useDeleteCategory } from "./useDeleteCategory";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";

const Cabin = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-600);
`;

const Price = styled.div``;


function CategoryRow({cabin}) {
  const { isDeleting, deleteCat } = useDeleteCategory();
  const {
    id: cabinId,
    name,
    created_at,
  } = cabin;

  return (
    <Table.Row>
      <Cabin>{name}</Cabin>
      <Price>{dayjs(created_at).format('DD/MM/YYYY')}</Price>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCat(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CategoryRow;

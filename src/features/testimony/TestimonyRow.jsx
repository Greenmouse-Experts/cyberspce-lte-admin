import styled from "styled-components";
import {  useDeleteTestimony } from "./useDeleteTestimony";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";
import CreateTestimonyForm from "./CreateTestimonyForm";

const Price = styled.div`
  font-weight: 500;
`;

function TestimonyRow({cabin}) {
  const { isDeleting, deleteTestimony } = useDeleteTestimony();
  const {
    id: cabinId,
    name,
    address,
    region,
    phone1,
    phone2,
    created_at
  } = cabin;

  return (
    <Table.Row>
      <div>{name}</div>
      <div>{address}</div>
      <div>{region}</div>
      <div>{dayjs(created_at).format('DD/MM/YYYY')}</div>
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
              <CreateTestimonyForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="plan"
                disabled={isDeleting }
                onConfirm={() => deleteTestimony(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default TestimonyRow;

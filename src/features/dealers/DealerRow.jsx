import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateDealersForm";
import {  useDeleteDealer } from "./useDeleteDealer";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";

const Price = styled.div`
  font-weight: 500;
`;

function DealerRow({cabin}) {
  const { isDeleting, deleteDealer } = useDeleteDealer();
  const formatType = {
    "starter": "Starter Plans",
    "holiday": "Holiday Packages",
    "monthly_renewal": "Monthly Renewal Packages",
    "extra_validity": "Extra Validity Plans"
  }
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
      <div >{phone1}</div>
      <div>{phone2}</div>
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
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="plan"
                disabled={isDeleting }
                onConfirm={() => deleteDealer(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default DealerRow;

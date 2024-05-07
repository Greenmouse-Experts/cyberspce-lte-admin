import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreatePlanForm";
import {  useDeletePlan } from "./useDeletePlan";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import dayjs from "dayjs";

const Price = styled.div`
  font-weight: 500;
`;

function PlanRow({cabin}) {
  const { isDeleting, deletePlan } = useDeletePlan();
  const formatType = {
    "starter": "Starter Plans",
    "holiday": "Holiday Packages",
    "monthly_renewal": "Monthly Renewal Packages",
    "extra_validity": "Extra Validity Plans"
  }
  const {
    id: cabinId,
    name,
    price,
    validity,
    avalibilty_day,
    avalibilty_hour,
    created_at,
    plan_type,
    data_balance,
  } = cabin;

  return (
    <Table.Row>
      <div>{name}</div>
      <Price>{formatCurrency(price)}</Price>
      <div className="capitalize">{validity}</div>
      <div>{formatType[plan_type]}</div>
      <div >{data_balance}</div>
      <div>{avalibilty_day}  days</div>
      <div>{avalibilty_hour}</div>
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
                onConfirm={() => deletePlan(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default PlanRow;

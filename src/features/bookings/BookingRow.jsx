import styled from "styled-components";
import { format } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-weight: 500;
`;

function BookingRow({ order}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "Confirmed": "green",
    "checked-out": "silver",
  };

  const  { user, items, id, status, paid_at } = order
  console.log(order);

  const totalAmount = items.reduce((sum, item) => {
    return sum + parseFloat(item.amount);
  }, 0);

  const navigate = useNavigate();
  // const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteBooking, isDeleting } = useDeleteBooking();


  return (
    <Table.Row>
      <Cabin>{user.name}</Cabin>

      <Cabin>{user.email}</Cabin>

      <Stacked>
        <span>{format(new Date(paid_at), "MMM dd yyyy")}</span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status}</Tag>

      <Amount>{formatCurrency(totalAmount)}</Amount>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={id} />
          <Menus.List id={id}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/orders/${id}`)}
            >
              See details
            </Menus.Button>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(id)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;

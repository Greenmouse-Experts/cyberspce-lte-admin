import styled from "styled-components";
import { format } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import {
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteUser";
import UserDetail from "./UserDetail";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
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


function UserRow({
  booking: {
    id: bookingId,
    startDate,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const { deleteBooking, isDeleting } = useDeleteBooking();

  return (
    <Table.Row>
      <Cabin>{guestName}</Cabin>

      <Stacked>
        <span>{email}</span>
      </Stacked>

      <Tag>09063744736</Tag>
      <Stacked>
        <span>{format(new Date(startDate), "MMM dd yyyy")}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Modal.Open opens="user-detail">
              <Menus.Button icon={<HiEye />}>See details</Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete User</Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="user-detail">
            <UserDetail />
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="user"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default UserRow;

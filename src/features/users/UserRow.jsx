import styled from "styled-components";
import { format } from "date-fns";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import UserDetail from "./UserDetail";
import { useEditUser } from "./useEditUser";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

function UserRow({ booking }) {
  const { isLoading, updateUser } = useEditUser();
  const  {
    id: nameId,
    created_at,
    email,
    name,
    phone_number,
    suspended
  } = booking;
  const handleUpdate = async () => {
    const payload = {
      suspend: suspended === '0'? 1 : 0,
      customer_id: nameId,
    }
    updateUser(payload);
  }

  return (
    <Table.Row>
      <Cabin>{name}</Cabin>
      <div>
        <span className="break-words w-[200px] block">{email}</span>
      </div>
      <div>
        {phone_number}
      </div>
      <div>
        <span>{format(new Date(created_at), "MMM dd yyyy")}</span>
      </div>
      <div>
        {suspended === "0" ? (
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
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={nameId} />
          <Menus.List id={nameId}>
            <Modal.Open opens="user-detail">
              <Menus.Button icon={<HiEye />}>See details</Menus.Button>
            </Modal.Open>
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Suspend User</Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="user-detail">
            <UserDetail id={nameId}/>
          </Modal.Window>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName={suspended === '0'? 'Suspend' : 'Unsuspend'}
              fullMsg={`Are you sure you want to ${suspended === '0'? 'Suspend' : 'Unsuspend'} this user`}
              disabled={isLoading}
              onConfirm={() => handleUpdate()}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default UserRow;

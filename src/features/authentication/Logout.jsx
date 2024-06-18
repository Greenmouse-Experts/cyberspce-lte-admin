import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import styled from "styled-components";
import LogoutModal from "./LogoutModal";



function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <div>
      <Modal>
        <Modal.Open opens="logout">
          <ButtonIcon disabled={isLoading}>
            {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
          </ButtonIcon>
        </Modal.Open>

        <Modal.Window name="logout">
        <LogoutModal logout={logout}/>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Logout;

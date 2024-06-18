import React from 'react'
import styled from 'styled-components';
import Button from '../../ui/Button';

const Wrapper = styled.div`
display: flex;
justify-content:space-between;
margin-top:3rem;
`;

function LogoutModal({onCloseModal, logout}) {
  return (
    <div>
    <h2>Are you sure you want to logout?</h2>
    <Wrapper>
      <Button onClick={() => logout()}>Logout</Button>
      <Button variation="danger"    onClick={onCloseModal}>Cancel</Button>
    </Wrapper>
  </div>
  )
}

export default LogoutModal
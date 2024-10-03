import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import ProfileAvatar from "../../ui/ProfileAvatar";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

function UserAvatar() {
  const { user } = useAuth();
  const { firstName, lastName, image  } = user;

  return (
    <StyledUserAvatar>
      <ProfileAvatar fname={firstName} lname={lastName} url={image} size={50} font={18}/>
      <span>{`${firstName}`}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;

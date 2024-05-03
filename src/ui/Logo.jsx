import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Img = styled.img`
  
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo.svg" : "/logo.svg";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;

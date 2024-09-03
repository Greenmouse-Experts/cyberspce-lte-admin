import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineCog6Tooth, HiOutlineHome } from "react-icons/hi2";
import { FaHandshake, FaList, FaUsers } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { BiSolidShoppingBags } from "react-icons/bi";
import { MdOutlineReviews } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">
            <FaBagShopping />
            <span>Products</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/bookings">
            <FaCartPlus />
            <span>Add Product</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/category">
            <FaList />
            <span>Category</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/orders">
            <BiSolidShoppingBags />
            <span>Orders</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/customers">
            <FaUsers />
            <span>Customers</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/plans">
            <BsClipboardData />
            <span>Data Plans</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dealers">
            <FaHandshake />
            <span>Dealers</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/banner">
            <FaHandshake />
            <span>Banner</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            <MdOutlineReviews />
            <span>Contact</span>
          </StyledNavLink>
          </li>
        <p>Pages</p>
        <li>
          <StyledNavLink to="/terms">
            <MdOutlineReviews />
            <span>Terms & Conditions</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/policy">
            <MdOutlineReviews />
            <span>Privacy Policy</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            <MdOutlineReviews />
            <span>About Us</span>
          </StyledNavLink>
        </li>
        
        <li>
          <StyledNavLink to="/account">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;

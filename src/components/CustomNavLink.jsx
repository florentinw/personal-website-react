import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CustomNavLink = styled(NavLink)`
  color: ${props => props.color || props.theme.higherContrast || "black"};
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  display: inline;
  padding: ${props => (props.noborder ? `0px` : `0 2px 0.15em 2px`)};
  border-bottom: ${props => (props.noborder ? `none` : `0.15em solid ${props.theme.lowerContrast || "gray"}`)};
  &.active {
    border-bottom: ${props => (props.noborder ? `none` : `0.15em solid ${props.theme.higherContrast || "gray"}`)};
  }
`;

export default CustomNavLink;

import styled from "styled-components";

export default styled.button`
  background-color: ${props => props.theme.buttonBackgroundColor || "gray"};
  border: none;
  color: ${props => props.theme.buttonTextColor || "gray"};
  padding: 12px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "CircularStd";
  font-size: 12px;
  letter-spacing: 0.03em;
  cursor: pointer;
`;

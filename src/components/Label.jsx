import styled from "styled-components";

export default styled.h4`
  color: ${props => props.theme.lowContrast || "gray"};
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

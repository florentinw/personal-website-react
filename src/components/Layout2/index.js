import styled from "styled-components";

export const FlexColumn = styled.div`
  flex: ${props => props.ratio || 1};
  margin-right: 30px;
  :last-child {
    margin: none;
  }
`;

export const FlexWrapper = styled(Container)`
  display: flex;
`;

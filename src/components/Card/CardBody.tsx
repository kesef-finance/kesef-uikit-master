import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space},
  background: #ffffff9e;
  backdrop-filter: blur(1px);
`;

CardBody.defaultProps = {
  p: "24px"
};

export default CardBody;

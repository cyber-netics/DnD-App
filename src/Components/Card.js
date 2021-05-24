import styled, { css } from "styled-components";

const cardBase = css`
  cursor: grab;
  min-height: 100px;
  border: 1px solid #e6ebf1;
  box-sizing: border-box;
  color: #455560;
  background: #fff;
  border-radius: 0.625rem;
  margin-bottom: 1rem;
  padding: 0.6rem;
`;

const transition = css`
  transition: box-shadow 0.5s, border-color 0.3s;
  transition-property: box-shadow, border-color;
  transition-duration: 0.5s, 0.5s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
`;

const cardShadow = css`
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
`;

export const Card = styled.div`
  ${cardBase};
  ${transition};

  &:hover {
    ${cardShadow};
  }
`;

export default Card;

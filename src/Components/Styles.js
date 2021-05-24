import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: scroll;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const H4css = css`
  font-family: inherit;
  line-height: 1.5;
  color: #1a3353;
  font-size: 17px;
  font-weight: 500;
`;

export const Badge = styled.div`
  background: ${(props) => props.color || "black"};
  display: inline-block;
  width: 2rem;
  height: 0.1875rem;
  margin-right: 0.5rem;
`;

export const Tag = styled.span`
  background: #f7f7f8;
  border: 1px solid #e6ebf1;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 11px;
  padding: 5.5px 17px;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

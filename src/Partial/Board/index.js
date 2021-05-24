import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 298px;
  border: 1px solid #e6ebf1;
  background-color: #f0f2f5;
  border-radius: 0.625rem;
  margin: 0 8px;
`;

const Header = styled.div`
  cursor: grab;
  display: flex;
  justify-content: center;
  border: 1px solid #e6ebf1;
  background-color: #f0f2f5;
  border-radius: 0.625rem;
  border-bottom-right-radius: unset;
  border-bottom-left-radius: unset;
  transition: background-color 0.2s ease;
  padding: 0.8rem 0.9rem;
  line-height: 1.5;
`;

const Content = styled.div`
  padding: 0.9rem;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

const AddTask = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  border-top: 1px solid #e6ebf1;
  height: 40px;
  line-height: 2.75;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background: #fff;

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Board = ({ data, children }) => (
  <Container>
    <Header>
      <Title>{data.title}</Title>
    </Header>
    <Content>{children}</Content>
    <AddTask onClick={() => {}}>Add Task</AddTask>
  </Container>
);

export default Board;

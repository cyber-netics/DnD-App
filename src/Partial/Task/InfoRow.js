import React from "react";
import styled from "styled-components";
import { List as LS, ListItem as Item, Tag } from "Components/Styles";

import {
  CalendarOutlined,
  CommentOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

const List = styled(LS)`
  display: flex;
`;
const ListItem = styled(Item)`
  margin-right: 1rem;
`;

const Icon = styled.span`
  margin-right: 0.2rem;
`;

const FooterRow = styled.span`
  display: flex;
  position: relative;
  font-size: 14px;
  color: #72849a;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const InfoRow = () => (
  <FooterRow>
    <List>
      <ListItem>
        <Tag>
          <span>
            <CalendarOutlined />
          </span>
          <span>11 July</span>
        </Tag>
      </ListItem>
      <ListItem>
        <Icon>
          <CommentOutlined />
          <span>1</span>
        </Icon>
        <Icon>
          <PaperClipOutlined />
          <span>2</span>
        </Icon>
      </ListItem>
    </List>
  </FooterRow>
);

export default InfoRow;

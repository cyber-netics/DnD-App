import React, { memo } from "react";
import styled from "styled-components";

import { Badge, H4css } from "Components/Styles";
import Avatar from "Components/Avatar";
import Attachment from "Components/Attachment";
import Card from "Components/Card";
import InfoRow from "./InfoRow";

const CardBody = styled.div`
  box-sizing: border-box;
`;

const Title = styled.h4`
  ${H4css};
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  color: #1a3353;
`;

const CardFooter = styled.div`
  position: relative;
  display: flex;
  svg {
    height: 100%;
    margin: 0;
  }
  svg {
    margin-right: 0.2rem;
  }
`;

export default memo(({ data }) => (
  <Card>
    <CardBody>
      <Attachment attachments={data.attachments} />
      <Badge color="#ffc542" />
      <Title>{"Check dataset"}</Title>
    </CardBody>
    <CardFooter>
      <InfoRow />
      <Avatar list={data.Assignees} />
    </CardFooter>
  </Card>
));

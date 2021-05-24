import React from "react";
import styled from "styled-components";

const AttachmentImg = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
`;

const Attachment = ({ attachments }) => (
  <AttachmentImg>
    <>
      {attachments?.length &&
        attachments.map((item) => (
          <>
            <Image src={item.image} />
          </>
        ))}
    </>
  </AttachmentImg>
);

export default Attachment;

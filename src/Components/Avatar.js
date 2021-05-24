import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: -0.5rem !important;
  box-sizing: border-box;
}
`;

const AvatarBase = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
`;

const AvatarThumb = styled(AvatarBase)`
  width: 22px;
  height: 22px;
  line-height: 25px;
  font-size: 18px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  color: #fff;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

const MoreWrapper = styled.div`
  font-size: 13px;
  font-weight: 500;
  align-self: center;
`;

const More = memo(({ list }) => {
  const maxAvts = 3;
  return (
    list?.length > maxAvts && (
      <MoreWrapper>
        {"+"}
        {list.length - maxAvts}
      </MoreWrapper>
    )
  );
});

const Avatar = memo(({ list }) => (
  <Container>
    {list &&
      list.map((avatar, index) => {
        if (index + 1 > 3) return <></>;

        return (
          <Wrapper>
            <AvatarThumb>
              <Image src={avatar.image} alt="avatar" />
            </AvatarThumb>
          </Wrapper>
        );
      })}
    <More list={list} />
  </Container>
));

export default Avatar;

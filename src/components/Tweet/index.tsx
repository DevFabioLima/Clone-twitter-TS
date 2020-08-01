import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => (
  <Container>
    <Retweeted>
      Você retweetou
    </Retweeted>
    <Body>
      <Avatar />
      <Content>
        <Header>
          <strong>Rocketseat</strong>
          <span>@Rocketseat</span>
          <Dot />
          <time>27 de junho</time>
        </Header>
        <Description>
          Foguete não tem ré
        </Description>
        <ImageContent />
        <Icons>
          <Status>
            <CommentIcon />
            01
          </Status>
          <Status>
            <RetweetIcon />
            06
          </Status>
          <Status>
            <LikeIcon />
            1999
          </Status>
        </Icons>

      </Content>
    </Body>
  </Container>
);

export default Tweet;

import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>
    <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>

      <h1>Fabio Lima</h1>
      <h2>@DevFabioLima</h2>

      <p>
        Developer at
        {' '}
        <a href="https://aaa.com.br">@XXX</a>
      </p>
      <ul>
        <li>
          <LocationIcon />
          São Paulo, Brasil
        </li>
        <li>
          <CakeIcon />
          Nascido em 01 de junho de 1999
        </li>
      </ul>
      <Followage>
        <span>
          seguindo
          {' '}
          <strong>94</strong>
        </span>
        <span>
          <strong>99 </strong>
          {' '}
          seguidores
        </span>
      </Followage>
    </ProfileData>
    <Feed />
  </Container>
);

export default ProfilePage;

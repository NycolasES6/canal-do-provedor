import React from 'react';

import imgprofile from '/assets/eu-profile.jpg'

import { Container, ImgPerfil, InfoPerfil} from './styles';

const Perfil: React.FC = () => {
  return <Container>
    <ImgPerfil>
    <img src={imgprofile} alt="" />
    </ImgPerfil>
    <InfoPerfil>
      <p className='title'>Perfil</p>
      <p className='cursos'>0 cursos completados</p>
      <p className='linkperfil'>Visualizar perfil</p>
    </InfoPerfil>
  </Container> ;
}

export default Perfil;
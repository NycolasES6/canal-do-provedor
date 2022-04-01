import React from 'react';
import Perfil from '../../components/Perfil';

import { Container, WellCome,Wp } from './styles';

interface WellcomeProps{
  name:string
}
const WellcomeMessage: React.FC<WellcomeProps> = ({name}) => {
  return <Wp>
    <p className='first'>Olá {name}</p>
    <p className='second'>É bom vêlo de volta.<br/>Continue aprendendo em nossa área de cursos</p>
  </Wp>
  ;
}

const Home: React.FC = () => {
  return <Container>
    <WellCome>
      <WellcomeMessage name="Nycolas"></WellcomeMessage>
    </WellCome>

    <Perfil/>

  </Container> ;
}

export default Home;
import React from 'react';

import { Container, Power, Button, GroupText, Ilustration, Text, HighlightsSection, Highlights} from './styles';

import HilightText from '../../components/HilightText'

import Highlight from '../../components/Hilight'

import { loadHilights } from '../../Services/Hilights';
const hilightsData = loadHilights()

const Home: React.FC = () => {
  return <Container>
    <HighlightsSection>
        <HilightText size='25pt' text="Destaques"></HilightText>
        
        <Highlights>
          {hilightsData.map((data)=> <Highlight bg={data.bg} link={data.link}></Highlight>)}
        </Highlights>
    </HighlightsSection>

    <hr style={{width:'70%', margin:'25px auto'}} />

    <Power>
      <GroupText>
      <Text>
        Com grandes poderes vem grandes resonsabilidades.
      </Text>
        <Ilustration src='assets/ilustrations/programmer.svg'/>
      </GroupText>
      <Button href='/cursos'>Cursos</Button>
    </Power>
  </Container> ;
}

export default Home;
import React from 'react';

import { Container , Face} from './styles';

interface IndiceProps{
  bg: string,
  link:string
}
const Highlight: React.FC<IndiceProps> = ({link, bg}) => {
  return <Container>
    <Face bg={bg}/>
    <a href={link}>Assistir</a>
  </Container>;
}

export default Highlight;
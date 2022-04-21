import React from 'react';

import { Container } from './styles';

interface TextProps{
  text: string;
  size: string;
}
const HilightText: React.FC<TextProps> = (data) => {
  return <Container>
    <p style={{fontSize:data.size}}>{data.text}</p>
  </Container>;
}

export default HilightText;
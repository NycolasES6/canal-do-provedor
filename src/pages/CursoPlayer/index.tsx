

import { useState } from 'react';
import { Container, Player, Menu, Lesson } from './styles';

 
const CursoPlayer: React.FC = () => {
  const [playerSrc, SetPlayerSrc] = useState("QkMbqL8QD9w")

  return<Container>
    <Player id="player" width="560" height="315" src={`https://www.youtube.com/embed/${playerSrc}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></Player>
    <Menu>
      <Lesson onClick={()=>SetPlayerSrc("QkMbqL8QD9w")}>Aula 01 - conhecendo</Lesson>
      <Lesson onClick={()=>SetPlayerSrc("JAFhXan_Y9o")}>Aula 02 - conhecendo</Lesson>
      <Lesson onClick={()=>SetPlayerSrc("tNxahMZsuyw")}>Aula 03 - conhecendo</Lesson>
      <Lesson onClick={()=>SetPlayerSrc("GLw__0ulj-A")}>Aula 04 - conhecendo</Lesson>
      <Lesson onClick={()=>SetPlayerSrc("_826vVEokj8")}>Aula 05 - conhecendo</Lesson>
      <Lesson onClick={()=>SetPlayerSrc("pwZ7ex9m_e8")}>Aula 06 - conhecendo</Lesson>
    </Menu>
  </Container>;
}
export default CursoPlayer;
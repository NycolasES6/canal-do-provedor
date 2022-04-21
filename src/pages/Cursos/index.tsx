import {Container, ContainerCursos, Message} from './styles'
import Curso from '../../components/Curso'
import HilightText from '../../components/HilightText'

import { useEffect } from 'react'
import { useState } from 'react'

interface CursosProps{
  title: string,
  imgSrc:string,
  description: string,
  link: string,
}

const Cursos: React.FC = ()=>{
  const [cursos, setCursos] = useState<CursosProps[]>([])
  useEffect(() =>{
    fetch('http://localhost:3000/api/cursos')
    .then(response => response.json())
    .then(data => setCursos(data))
  }, [])
  return <Container>
    <HilightText size="22pt" text="Com grandes poderes vem grandes responsabilidades."/>

    <ContainerCursos>
    {
    cursos.map(curso => <Curso key={curso.title} imgSrc={curso.imgSrc} title={curso.title} description={curso.description} link={curso.link} ></Curso>)
    }
    </ContainerCursos>

  </Container>
}
export default Cursos
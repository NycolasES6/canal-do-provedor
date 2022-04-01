import {Container, ContainerCursos, Message} from './styles'
import Curso from '../../components/Curso'
import {loadCursos} from '../../Services/Cursos'
const cursos = loadCursos()

const Cursos: React.FC = ()=>{
  return <Container>
    <Message>Com grandes poderes vem grandes responsabilidades.</Message>

    <ContainerCursos>
    {cursos.map(curso => <Curso key={curso.title} imgSrc={curso.imgSrc} title={curso.title} description={curso.description} link={curso.link} ></Curso>)}
    </ContainerCursos>

  </Container>
}
export default Cursos
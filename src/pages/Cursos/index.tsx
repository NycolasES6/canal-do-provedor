import {Container} from './styles'
import Curso from '../../components/Curso'
import {loadCursos} from '../../Services/Cursos'
const cursos = loadCursos()

const Cursos: React.FC = ()=>{
  return <Container>

    {cursos.map(curso => <Curso key={curso.title} imgSrc={curso.imgSrc} title={curso.title} description={curso.description} link={curso.link} ></Curso>)}

  </Container>
}
export default Cursos
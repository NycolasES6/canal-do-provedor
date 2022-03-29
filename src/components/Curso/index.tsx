import {Container, Title, Description, Link, Cover} from './styles'

interface CursoProps{
  title: string,
  imgSrc:string,
  description:string,
  link:string
}
const Curso: React.FC<CursoProps> =({title, imgSrc, description, link})=>{
  return <Container>
    <Cover src={imgSrc}/>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Link href={link}>Começar agora</Link>
  </Container>
}
export default Curso
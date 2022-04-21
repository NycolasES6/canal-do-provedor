import { Container, Menu, Logo, Li } from './styles';

const Header: React.FC = () => {
  return <Container>
    <a href='/'><Logo/></a>
    <Menu>
      <Li><a href="/home">Home</a><hr/></Li>
      <Li><a href="/store">Store</a><hr/></Li>
      <Li><a href="/cursos">Aprenda</a><hr/></Li>
    </Menu>
    </Container>;
}

export default Header;

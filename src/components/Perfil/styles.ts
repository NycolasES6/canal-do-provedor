import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgPerfil = styled.div`
  height: 100px;
  width: 100px;
  border: 3px solid white;
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  img{
    width: 100%;
    border-radius: 50%;
  }
`

export const InfoPerfil = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  p.title{
    font-size: 25pt;
    font-weight: 600;
  }
  p.cursos{
    font-size: 13pt;
    color:var(--);
  }
`

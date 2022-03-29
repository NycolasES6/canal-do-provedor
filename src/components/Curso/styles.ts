import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  color:white;
  background-color: var(--gray-blue);
  padding: 15px;
  width: 300px;
  height: 470px;
  border-radius: 5px;
  margin: 20px 10px;
`
export const Cover = styled.img`
border-radius: 10px;
`
export const Title = styled.p`
  font-weight: 700;
  font-size:15pt ;
  color: var(--white);
`

export const Description = styled.p``

export const Link = styled.a`
  background-color: var(--blue);
  color: white;
  text-decoration: none;
  text-align: center;

  padding: 15px 0px;
  border-radius: 10px;
  transition: .3s;

  border: 2px solid rgba(0,0,0,0);
  &:hover{
    background-color: var(--bluehover);
    border:2px solid rgba(255,255,255,1);
  }
`

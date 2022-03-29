import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  padding-bottom: 0;
`

export const Player = styled.iframe`
  width: 70vw;
  height:35vw;
  border: none;
  border-radius: 15px;
`

export const Menu = styled.div`
background-color:#111327;
height:35vw;
width: 25vw;
border-radius: 15px;
padding: 20px;
`

export const Lesson = styled.a`
  text-decoration: none;
  display: block;
  color: var(--white);
  font-size: 14pt;
  font-weight: 600;
  cursor: pointer;
  transition: .4s;
  + a{
    margin-top: 20px;
  }
  :hover{
    color: var(--blue-light);
  }
`
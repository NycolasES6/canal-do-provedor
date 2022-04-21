import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
`

export const HighlightsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  height: 100%;
`

export const Highlights = styled.div`
  width: 100%;
  height:auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Power = styled.section`
  position: relative;
  height:calc(100vh - 80px);
  overflow: hidden;
`;

export const Button = styled.a`
  background: var(--gray-blue);
  border-radius:5px;
  padding: 10px 30px;
  margin: 0 0 0 calc(50% - 60px);

  color: white;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500; 

  transition: .3s;
  :hover{
    background-color: var(--blue);
  }
`

export const GroupText = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 20px;
  justify-content: center;
  margin-bottom: 5%;
`

export const Ilustration = styled.img`
  width: 35%;
  margin-left: 5%;
`

export const Text = styled.p`
  margin-right: 5%;
  width: 40%;

  color:white;
  font-size: 55pt;
  font-weight: 400;
`
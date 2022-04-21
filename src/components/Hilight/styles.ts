import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  max-width: 650px;
  width: 90vw;
  margin: 20px 0;
  border-radius: 10px;
  text-align: right;
  display: flex;
  justify-content:space-between;

  a{
    width: 100px;
    text-align: center;
    font-size: 15pt;
    color: white;
    text-decoration: none;

    background-color: var(--blue);
    padding: 7px 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background-color: var(--gray-blue);
    border: 2px solid rgba(0,0,0,0);
    transition: .3s;
    &:hover{
      box-shadow: 0px 0px 5px var(--blue-light);
      border: 2px solid white;
    }
  }
`;

interface BgProps{
  bg:string
}
export const Face = styled.div<BgProps>`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  border: 2px solid white;
  border-radius:5px;
  box-shadow: 0px 0px 10px var(--blue-light);
`
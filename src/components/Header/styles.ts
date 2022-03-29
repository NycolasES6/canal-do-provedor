import styled from 'styled-components';
import {RecordCircle} from '@styled-icons/bootstrap/RecordCircle'
import {Settings}  from '@styled-icons/evaicons-solid/Settings'

export const Container = styled.header`
  height: 80px;
  width: 100%;
  padding: 0 30px;
  background-color: var(--tertiary);
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, .2);
`;

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  font-size: 13pt;
`;

export const Li  = styled.li`
  &:hover hr{
    width: 100%;
  }

  & + li{
    margin-left: 30px;
  }
  a{
    color: white;
    text-decoration: none;
  }
  hr{
    width: 0%;
    border: 1px solid var(--blue);
    transition: all .5s;
  }
`;

export const Logo = styled(RecordCircle)`
height: 50px;
width: 50px;
color: var(--blue);
`;

export const SettingIcon = styled(Settings)`
  width: 33px;
  color: var(--blue);
`;
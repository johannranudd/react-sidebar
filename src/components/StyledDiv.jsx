import styled from 'styled-components';
import styledComponents from 'styled-components';

export const StyledDiv = styled.div`
  .home {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-content: center;
    width: 90%;
    max-width: 350px;
    height: 200px;
    background: red;
  }
`;

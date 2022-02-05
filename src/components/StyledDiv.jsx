import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* sidebar */
  .sidebar {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: #def;
  }
  .home {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .backdrop {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
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
      background: white;
      button {
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
        .icon {
          font-size: 1.5rem;
          color: red;
        }
      }
    }
  }
`;

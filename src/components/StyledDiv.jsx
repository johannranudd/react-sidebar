import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* sidebar */
  background: #def4fd;
  .sidebar {
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
    transition: 0.4s;
    list-style-type: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        transform: rotate(90deg);
      }
      * {
        color: #ff3d3d;
        font-size: 1.5rem;
      }
    }
    .list-item {
      display: flex;
      align-items: center;
      padding: 20px;
      width: 100%;
      cursor: pointer;
      text-decoration: none;
      transition: 0.3s;
      color: #303030;
      :hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      .icon {
        color: #529bdf;
        margin-right: 10px;
        display: flex;
        font-size: 1.2rem;
      }
      .text {
        font-size: 1.2rem;
      }
    }
    .social-icons {
      display: flex;
      justify-content: space-between;
      width: 50%;
      margin: 2rem auto;
      a {
        color: #529bdf;
        font-size: 1.2rem;
        :hover {
          opacity: 0.7;
        }
      }
    }
  }
  .home {
    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: transparent;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        font-size: 1.2rem;
      }
    }
    .menu-icon-container {
      .icon {
        position: absolute;
        margin: 20px;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.4s;
        :hover {
          transform: rotate(90deg);
        }
      }
    }
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
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 5px;
      button {
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
        .icon {
          font-size: 1.5rem;
          color: #ff3d3d;
          transition: 0.4s;
          :hover {
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  /* MEDIA */
  @media (min-width: 550px) {
    .sidebar {
      transition: 0.4s;
      width: 300px;
      .social-icons {
        width: 75%;
      }
    }
  }
`;

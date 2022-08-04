import styled from 'styled-components';

export default styled.div`
  li {
    padding: 1.2em;
  }
  .searchbar {
    margin-right: 2vw;
  }
  .navbar_logo {
    img {
      filter: alpha(opacity=80);
      -moz-opacity: 0.8;
      opacity: 0.8;
      cursor: pointer;
      height: 50px;
      -webkit-animation: spin 5s linear infinite;
      -moz-animation: spin 5s linear infinite;
      animation: spin 5s linear infinite;
    }
    img:hover {
      filter: alpha(opacity=100);
      -moz-opacity: 1;
      opacity: 1;
    }
  }
  .navbar {
    background-color: #72727275;
    color: white;
    position: fixed;
    width: 100%;
    min-height: 35px;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .navbar_links {
    display: flex;
  }
  .navbar_link {
    padding: 0 0.3rem;
    color: inherit;
  }
  .navbar_burger {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: inherit;
    display: none;
  }
  @media screen and (max-width: 767px) {
    .navbar_links {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: -100vw;
      bottom: 0;
      width: 0;
      height: 100vh;
      visibility: hidden;
      background-color: #000000;
      transition: all 0.8s ease-out;
    }
    .show-nav .navbar_links {
      width: 100vw;
      right: 0;
      visibility: visible;
    }
    .navbar_item::after {
      content: '';
      display: block;
      margin: 0 auto;
      width: 10vw;
      height: 1px;
      background-color: white;
    }
    .navbar_link {
      display: block;
      padding: 1.5rem;
      font-size: 5vw;
    }
    .navbar_burger {
      display: block;
      position: fixed;
      top: 1rem;
      right: 1rem;
    }
    .navbar_burger:hover {
      cursor: pointer;
    }
    .burger-bar,
    .burger-bar::before,
    .burger-bar::after {
      display: block;
      width: 40px;
      height: 3px;
      position: relative;
      border-radius: 3px;
      background: white;
      transition: all 0.5s ease-in-out;
    }
    .burger-bar::before,
    .burger-bar::after {
      content: '';
      position: absolute;
      left: 0;
    }
    .burger-bar::before {
      transform: translateY(-12px);
    }
    .burger-bar::after {
      transform: translateY(12px);
    }
    .show-nav .burger-bar::before {
      transform: rotate(45deg);
    }
    .show-nav .burger-bar::after {
      transform: rotate(-45deg);
    }
    .show-nav .burger-bar {
      width: 0;
      background: transparent;
    }
    .navbar_item {
      transform: translateY(100vh);
    }
    .show-nav .navbar_item {
      transform: translateY(0);
    }
    .show-nav .slideInDown-1 {
      transition: all 1s ease-out;
    }
    .show-nav .slideInDown-2 {
      transition: all 1.1s ease-out;
    }
    .show-nav .slideInDown-3 {
      transition: all 1.2s ease-out;
    }
    .show-nav .slideInDown-4 {
      transition: all 1.3s ease-out;
    }
    .show-nav .slideInDown-5 {
      transition: all 1.4s ease-out;
    }
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

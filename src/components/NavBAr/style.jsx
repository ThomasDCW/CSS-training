import home from '../../assets/nav/home.png';
import fav from '../../assets/nav/fav.png';
import mail from '../../assets/nav/mail.png';
import dl from '../../assets/nav/dl.png';
import styled from 'styled-components';

export default styled.ul`
  background-color: #25036ed1;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 5px 15px #022dc940;
  .selectedHome {
    height: 30px;
    width: 30px;
    background: url(${home});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-50%) scale(1.5);
  }
  .unSelectedHome {
    height: 20px;
    width: 20px;
    background: url(${home});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .selectedFav {
    height: 30px;
    width: 30px;
    background: url(${fav});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-50%) scale(1.5);
  }
  .unSelectedFav {
    height: 20px;
    width: 20px;
    background: url(${fav});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .selectedDl {
    height: 30px;
    width: 30px;
    background: url(${dl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-50%) scale(1.5);
  }
  .unSelectedDl {
    height: 20px;
    width: 20px;
    background: url(${dl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .selectedMail {
    height: 30px;
    width: 30px;
    background: url(${mail});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-50%) scale(1.5);
  }
  .unSelectedMail {
    height: 20px;
    width: 20px;
    background: url(${mail});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

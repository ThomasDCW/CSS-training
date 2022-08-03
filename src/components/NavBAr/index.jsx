import { NavLink } from 'react-router-dom';
import SNavBAr from './style';

const datas = [
  {
    id: 1,
    label: '/home',
    class1: 'selectedHome',
    class2: 'unSelectedHome',
  },
  {
    id: 2,
    label: '/fav',
    class1: 'selectedFav',
    class2: 'unSelectedFav',
  },
  {
    id: 3,
    label: '/dl',
    class1: 'selectedDl',
    class2: 'unSelectedDl',
  },
  {
    id: 4,
    label: '/mail',
    class1: 'selectedMail',
    class2: 'unSelectedMail',
  },
];

export default function NavBar() {
  return (
    <SNavBAr>
      {datas.map((data) => {
        return (
          <NavLink
            key={data.id}
            to={data.label}
            className={({ isActive }) => (isActive ? data.class1 : data.class2)}
          />
        );
      })}
    </SNavBAr>
  );
}

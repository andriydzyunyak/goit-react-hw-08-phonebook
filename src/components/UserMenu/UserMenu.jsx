import { UserMenuContainer } from 'components/UserMenu/UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/authSelectors';
import * as authOperations from 'redux/Auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <UserMenuContainer>
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Выйти
      </button>
    </UserMenuContainer>
  );
};

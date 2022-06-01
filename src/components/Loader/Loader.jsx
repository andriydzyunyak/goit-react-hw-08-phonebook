import HashLoader from 'react-spinners/HashLoader';
import { useSelector } from 'react-redux';
import { isLoadingContact } from 'redux/contactsReducer';
import { getFetchingCurrentUser } from 'redux/Auth/authSelectors';
import { Spinner } from 'components/Loader/Loader.styled';

export const LoaderPage = () => {
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  return (
    <Spinner>
      <HashLoader color="#0000ff" loading={!isFetchingCurrentUser} size={60} />
    </Spinner>
  );
};

export const LoaderContact = () => {
  const isLoading = useSelector(isLoadingContact);

  return (
    <Spinner>
      <HashLoader color="#0000ff" loading={isLoading} size={60} />
    </Spinner>
  );
};

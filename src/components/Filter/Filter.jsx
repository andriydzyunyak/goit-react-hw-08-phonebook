import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsReducer';
import * as contactsReducer from 'redux/contactsReducer';
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(contactsReducer.onChangeFilter(evt.currentTarget.value));
  };

  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={changeFilter}
          placeholder="Enter search name"
        ></FilterInput>
      </FilterLabel>
    </>
  );
};

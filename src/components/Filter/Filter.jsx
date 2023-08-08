import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label htmlFor="input-search">Find contacts by name</Label>
      <Input
        type="text"
        id="input-search"
        onChange={handleChange}
        name="filter"
        value={filter}
      />
    </>
  );
};

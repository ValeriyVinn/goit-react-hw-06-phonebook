import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
import './Filter.module.css';
 import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return ( 
    <label>
    Find contacts by name
    <input
      type="text"
      name={filter}
      onChange={changeFilterInput}
      className={css.input}
    />
  </label>
  );
};
  

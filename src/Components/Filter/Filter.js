import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getContactsFilter } from '../../redux/selectors';

const Filter = () => {
  const value = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;

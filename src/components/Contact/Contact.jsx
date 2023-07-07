import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';
import css from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
    <li className={css.contact}>
        <p>
        {name}: {number}
        </p>
        <button className={css.btnDelete} type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
        </button>
    </li>
    );
    }

Contact.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
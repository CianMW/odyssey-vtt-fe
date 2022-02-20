import { Link } from 'react-router-dom';
import './CButton.css';

export const CButton = ({type, label, link, icon}) => {
  return (
      <Link to={link}>
        <button className={" " + type}>
         {icon && <i className={icon}></i>}{" "}
         {label}
        </button>
      </Link>
  );
};







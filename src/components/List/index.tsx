import { ReactNode } from 'react';
import './styles.css';

interface IRepositoriesList {
  children?: ReactNode;
}

function RepositoriesList({ children }: IRepositoriesList) {
  return <ul className='repositories-list'>{children}</ul>;
}

export default RepositoriesList;

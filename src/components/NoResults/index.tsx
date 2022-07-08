import { Link } from 'react-router-dom';
import './index.css';

function NoResults() {
  return (
    <div className='no-results'>
      <h2>No Results Found</h2>
      <p>Please, search again</p>
      <Link to={'/'}>Search again</Link>
    </div>
  );
}

export default NoResults;

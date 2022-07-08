import { Link } from 'react-router-dom';
import './index.css';

function ErrorMessage() {
  return (
    <div className='error-message'>
      <h2>Something Wrong</h2>
      <h3>Server Error</h3>
      <Link to={'/'}>Search again</Link>
    </div>
  );
}

export default ErrorMessage;

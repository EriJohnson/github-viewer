import './styles.css';

function RepositoryItem({ name }: { name: string }) {
  return <li className='repository-item'>{name}</li>;
}

export default RepositoryItem;

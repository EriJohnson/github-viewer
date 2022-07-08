import { BarLoader } from 'react-spinners';

interface ILoader {
  isLoading: boolean;
}

function Loader({ isLoading }: ILoader) {
  return <BarLoader loading={isLoading} color={'#f4a27e'} />;
}

export default Loader;

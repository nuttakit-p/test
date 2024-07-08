import { useLocation } from 'react-router-dom';
import Landings from '../components/Landings';

interface Props {
  ladingType?: string;
}

const LandingPage = ({ ladingType }: Props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = ladingType || queryParams?.get('type');

  return <Landings type={type} />;
};

export default LandingPage;

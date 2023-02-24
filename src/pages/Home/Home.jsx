import { HomeContainer} from './Home.styled';
import { Calculate } from 'components/Calculate/Calculate';
import { History } from 'components/History/History';

const Home = () => {
  return (
    <HomeContainer>
      <Calculate />
      <History />
    </HomeContainer>
  );
};

export default Home;

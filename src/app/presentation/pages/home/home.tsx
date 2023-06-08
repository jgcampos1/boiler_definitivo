import { AuthorizationHeader, Header } from '../../components';
import { useAuth } from '../../hooks/use-auth';
import { Container, Content } from './home-styles';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      {isAuthenticated ? <AuthorizationHeader /> : <Header />}
      <Content>
        <h1>Home Page</h1>
      </Content>
    </Container>
  );
};

export default Home;

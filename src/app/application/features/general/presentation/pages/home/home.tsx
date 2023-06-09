import { AuthorizationHeader } from '~/app/application/shared/components';
import { useAuth } from '~/app/application/shared/hooks/use-auth';

import { Container, Content } from './home-styles';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Container>
      {isAuthenticated ? <AuthorizationHeader /> : <AuthorizationHeader />}
      <Content>
        <h1>Home Page</h1>
      </Content>
    </Container>
  );
};

export default Home;

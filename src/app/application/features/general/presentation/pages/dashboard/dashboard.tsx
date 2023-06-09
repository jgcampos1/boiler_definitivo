import { useSelectors } from '~/app/application/shared/hooks/use-selectors';

import { Container, WellComeTitle } from './dashboard-styles';

const Dashboard = () => {
  const user = useSelectors.User();

  return (
    <Container>
      <WellComeTitle variant='h1'>
        Bem Vindo (A), <strong>{user?.firstName}</strong> !
      </WellComeTitle>

      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;

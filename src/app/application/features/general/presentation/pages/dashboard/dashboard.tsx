import { Container, WellComeTitle } from './dashboard-styles';

const Dashboard = () => {
  return (
    <Container>
      <WellComeTitle variant='h1'>
        Bem Vindo (A), <strong>USER NAME</strong> !
      </WellComeTitle>

      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;

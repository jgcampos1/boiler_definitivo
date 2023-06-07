import { useSelectors } from '../../hooks';
import {
  Container,
  DescriptionOption,
  WellComeTitle
} from './dashboard-styles';

const Dashboard = () => {
  const user = useSelectors.User();

  const goTo = <DescriptionOption variant='body2'>ir para</DescriptionOption>;

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

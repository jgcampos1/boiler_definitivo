import { createRoot } from 'react-dom/client';

import Router from './app/main/router/router';
import '~/app/main/config/i18next-setup';

const container = document.querySelector('#root');

const root = createRoot(container);

root.render(<Router />);

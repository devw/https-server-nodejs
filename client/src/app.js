import { init as initAuth } from './auth/auth';

const node = document.createElement('div');
node.setAttribute('id', 'flp-app');
document.body.appendChild(node);
initAuth();

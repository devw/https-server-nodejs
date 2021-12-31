import { init as initAuth } from './auth/auth';
import { init as initOrders } from './orders/orders';

const node = document.createElement('div');
node.setAttribute('id', 'flp-app');
document.body.appendChild(node);
initAuth();
initOrders();

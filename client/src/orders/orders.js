import { getLastChild, getCookie } from '../utils';
import html from './orders.html';

const APP_API = process.env.APP_API;

const getOrders = ({ target }) => target.querySelector('textarea').value.split(/\n|,/);

const getHeader = () => ({ headers: new Headers({ Authorization: getCookie('accessToken') }) });

const showOrders = ({ target }, { stdout }) => (target.nextElementSibling.innerText = stdout);

const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch(`${APP_API}/orders/${getOrders(e).join(',')}`, getHeader());
        showOrders(e, await res.json());
    } catch (error) {
        e.target.nextElementSibling.innerText = 'Refresh the tokens!';
    }
};

export const init = () => {
    const node = document.querySelector('#flp-app');
    node.insertAdjacentHTML('beforeend', html);
    getLastChild(node, 'form').addEventListener('submit', submitHandler);
};

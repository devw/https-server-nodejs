import { getLastChild } from '../utils';
import html from './auth.html';

const APP_API = process.env.APP_API;

const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${APP_API}/login`, { method: 'POST' });
    const { accessToken } = await res.json();
    document.cookie = `accessToken=${accessToken};`;
};

export const init = () => {
    const node = document.querySelector('#flp-app');
    node.insertAdjacentHTML('beforeend', html);
    getLastChild(node, 'form').addEventListener('submit', submitHandler);
};

import html from './auth.html';

// const { APP_API } = 'process.env';
// console.log('process.env.APP_API:', process.env.APP_API);
const APP_API = process.env.APP_API;

const next = async ({ accessToken }) => {
    const headers = { headers: new Headers({ Authorization: accessToken }) };
    await fetch(`${APP_API}/orders/1312311213231,1231232`, headers);
};

const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`${APP_API}/login`, { method: 'POST' });
    next(await res.json());
};

export const init = () => {
    const node = document.querySelector('#flp-app');
    node.innerHTML = html;
    const form = document.querySelector('#auth');
    form.addEventListener('submit', submitHandler);
};

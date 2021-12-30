const node = document.createElement('div');

const getHtmlString = () => `
    <h1>test</h1>
`;

node.innerHTML = getHtmlString();
document.body.appendChild(node);

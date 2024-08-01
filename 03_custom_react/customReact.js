function customRender(reactElement, container) {
  const { type, props, children } = reactElement;
  const element = document.createElement(type);
  element.innerHTML = children;

  Object.keys(props).forEach((prop) => {
    // if (prop === 'children') {
    //   continue;
    // }
    element.setAttribute(prop, props[prop]);
  });
  container.appendChild(element);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'http://google.com',
    target: '_blank'
  },
  children: 'click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
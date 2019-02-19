import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

console.error = (message, ...args) => {
  const formattedMsg = args.reduce(
    (acc, curr) => acc.replace(/%s/, curr),
    message
  );
  throw new Error(formattedMsg);
};

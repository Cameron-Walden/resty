import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../src/components/form/index.js';
// import App from '../src/App';

describe('Testing the Form component', () => {

  it('Should use a callback on submit', () => {
    const callback = jest.fn();

    render(<Form onSubmit={callback}/>);

    const button = screen.getByRole('button');
    // const input = screen.getByRole('input');

    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
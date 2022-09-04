import { fireEvent, render, screen } from '@testing-library/react';
import { Title } from './Title';
import '@testing-library/jest-dom';

let mockFn: jest.Mock;

beforeEach(() => {
  mockFn = jest.fn();
});

describe('title', () => {
  it('Deve mostrar o título com valor recebido', () => {
    render(<Title text="Teste" handleRemoveAll={mockFn} />);
    expect(screen.getByText('Teste')).toBeInTheDocument();
  });
  it('Deve mostrar o botão esvaziar e ativar a função', () => {
    render(<Title text="Teste" handleRemoveAll={mockFn} />);
    expect(screen.getByText('Esvaziar')).toBeInTheDocument();
    const clickEsvaziar = screen.getByText('Esvaziar');
    fireEvent.click(clickEsvaziar);
    expect(mockFn).toHaveBeenCalled();
  });
});

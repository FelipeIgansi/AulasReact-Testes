import React from 'react';
import { render } from '@testing-library/react';
import Transacao from './Transacao';


describe('Componente de transação do extrato', () => {
  it('O snapshot do compoenent deve sempre permanecer o mesmo', () => {
    const {container} = render(<Transacao
    data="15/02/2022"
    tipo="saque"
    valor="20"
    />)

    expect(container).toMatchSnapshot();  
  });
  
});

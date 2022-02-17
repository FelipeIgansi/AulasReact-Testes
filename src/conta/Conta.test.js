import React from 'react';
import { screen, render } from "@testing-library/react";
import Conta from './Conta'

describe('Componente de conta', () => {
  it('Exibir o saldo da conta com formatacao monetária', () => {
    render (<Conta saldo={1000}/>)
    const saldo = screen.getByTestId('saldo-conta');
    
    expect(saldo.textContent).toBe("R$ 1000")
    
  });
  
});

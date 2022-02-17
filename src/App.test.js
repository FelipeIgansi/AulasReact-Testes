import App, { calcularNovoSaldo } from "./app";
import React from "react";
import {
  fireEvent,
  getByLabelText,
  getByTestId,
  reader,
  render,
  screen,
} from "@testing-library/react";

describe("Componente principal", () => {
  describe("Quando abro o app do banco", () => {
    it("O nome é exibido", ()  => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("O saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });
    it("O botão de realizar transação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });
  describe("Quando eu realizo uma transação", () => {
    it("de saque, o valor vai diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };

      const novoSaldo = calcularNovoSaldo(valores, 100);

      expect(novoSaldo).toBe(50);
    });

    it("de deposito, o valor vai aumentar", () => {
      const valores = {
        transacao: "deposito",
        valor: 50,
      };

      const novoSaldo = calcularNovoSaldo(valores, 100);

      expect(novoSaldo).toBe(150);
    });

    it("de saque, a transação deve ser realizada", () => {
      render(<App />);

      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botãoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 990 } });
      fireEvent.click(botãoTransacao);
      expect(saldo.textContent).toBe("R$ 10");
    });
  });
});

import App, { calcularNovoSaldo } from "./app";
import React from "react";
import { reader, render, screen } from "@testing-library/react";

describe("Componente principal", () => {
  describe("Quando abro o app do banco", () => {
    it("O nome é exibido", () => {
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
  });
});

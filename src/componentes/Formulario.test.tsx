import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

test('Quando o input estiver vazio, novos participantes não poderão ser adicionados', () => {
    render(<Formulario />)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // encontrar o botão
    const botao = screen.getByRole('button')

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})
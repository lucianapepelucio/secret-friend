import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

test('Quando o input estiver vazio, novos participantes não poderão ser adicionados', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>)
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    // encontrar o botão
    const botao = screen.getByRole('button')
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    // garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})

test('adicionar um participante caso exista um nome preenchido', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>)
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    // encontrar o botão
    const botao = screen.getByRole('button')
    // inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Luciana'
        }
    })
    // clicar no botão de submeter
    fireEvent.click(botao)
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()
    // garantir que o input não tenha um valor
    expect(input).toHaveValue('')
})

test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>)
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')
    fireEvent.change(input, {
        target: {
            value: 'Luciana'
        }
    })
    fireEvent.click(botao)
    fireEvent.change(input, {
        target: {
            value: 'Luciana'
        }
    })
    fireEvent.click(botao)

    const mensagemDeErro = screen.getByRole('alert')

    expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
})
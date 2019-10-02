import React, { Component } from 'react'

export class Task2 extends Component {
    render() {
        return (
            <div id="Task2">
                <h1>Task 2</h1>
                <p>● Pode visualizar-se o mockup geral desta tarefa mais abaixo;</p>
                <p>● Implementação de um editor WYSIWYG;</p>
                <p>● A library que se pretender utilizar é a Draft.js: https://draftjs.org/</p>
                <p>● Implementação de um campo select que à medida que o user muda de opção, o editor receberá um texto pré-definido conforme a opção selecionada;</p>
                <p>● A lista de opções do campo select deverá ser alimentada via store e pode ser “inventada” pelo developer; </p>
            </div>
        )
    }
}

export default Task2

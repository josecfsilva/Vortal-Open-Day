import React, { Component } from 'react'

export class Task3 extends Component {
    render() {
        return (
            <div id="Task3">
                <h1>Task 3</h1>
                <p>● Pode visualizar-se o mockup geral desta tarefa na próxima página;</p>
                <p>● Implementação de um modal que vai mostrar uma tabela com paginação e um formulário para realizar pesquisas sobre os dados dessa tabela;</p>
                <p>● A tabela mostrará uma lista de empresas que deve ser alimentada via um ficheiro externo ou objecto hard-coded diretamente no código;</p>
                <p>● O user poderá selecionar empresas ao clicar nas checkboxes (o estado das checkboxes deve permanecer mesmo quando se muda de página);</p>
                <p>● A checkbox adicional que existe no topo da tabela vai selecionar todas as empresas da página atual;</p>
                <p>● Quando o user clicar no botão “Adicionar”, devem executar um console.log que liste todas as empresas que o user selecionou;</p>
                <p>● O formulário terá dois "modos": "simple" e "advanced", o user poderá alterar o “modo” via link conforme print;</p>
            </div>
        )
    }
}

export default Task3

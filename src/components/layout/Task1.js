import React, { Component } from 'react'

export class Task1 extends Component {
    render() {
        return (
            <div id="Task1">
                <h1>Task 1</h1>
                <p>● Deve utilizar-se o componente “Anchor” do Ant Design: https://ant.design/components/anchor/#header </p>
                <p>● Trata-se de uma lista de "links" que permitem ao user navegar numa página por meio de scroll;</p>
                <p>● O componente poderá ser utilizado em mais do que uma página, em que cada página deverá ser capaz de indicar ao componente que links deve renderizar;</p>
                <p>● A página e o componente devem estar ambos ligados à mesma store, onde a página se encarregará de definir os links, e o componente se encarregará de os ler e renderizar;</p>
                <p>● As âncoras são colocadas na página e ao clicar nos links o componente reage de acordo e executa o scroll na página principal;</p>
            </div>
        )
    }
}

export default Task1

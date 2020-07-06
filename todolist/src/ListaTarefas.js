import React from 'react';
import './ListaTarefas.css'
import M from 'materialize-css';

export default function ListaTarefas(props) {

    M.AutoInit();

    const tarefas = props.tarefas;
    const lista = tarefas.map(tarefa => {
        return <div className="listagem" key={tarefa.key}>
            <p>{tarefa.text}
                <i class="small material-icons"
                onClick={ () =>
                    props.deletaTarefa(tarefa.key)
                }>delete</i>
            </p>
        </div>
    })
    return (
        <div>{lista}</div>
    )
}
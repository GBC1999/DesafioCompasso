import React from 'react';
import './ListaTarefas.css'
import M from 'materialize-css';

export default function ListaTarefas(props) {

    M.AutoInit();

    const tarefas = props.tarefas;
    const lista = tarefas.map(tarefa => {
        return <div className="listagem" key={tarefa.key}>
            <p>
                <input type="text"
                    id={tarefa.key}
                    value={tarefa.text} 
                    onChange={
                        (e) =>{
                            props.setUpdate(e.target.value, tarefa.key)
                        }
                    }/>
                <i class="small material-icons"
                    onClick={() =>
                        props.deletaTarefa(tarefa.key)
                    }>delete</i>
            </p>
        </div>
    })
    return (
        <div>{lista}</div>
    )
}
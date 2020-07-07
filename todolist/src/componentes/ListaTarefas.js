import React from 'react';
import { List } from "@material-ui/core";
import Tarefa from "./Tarefa";


export default function ListaTarefas({ tarefas, alternaFeito, removeTarefa }) {
    return (
        <List>
            {tarefas.map(lista => (
                <Tarefa
                    key={lista.id}
                    lista={lista}
                    alternaFeito={alternaFeito}
                    removeTarefa={removeTarefa} />
            ))}
        </List>
    )
}
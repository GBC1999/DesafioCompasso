import React, { useEffect, useState } from 'react' //useEffect permite fornecer funcionalidades aos dados
import './main.css';
import cadastroTarefa from "./componentes/cadastroTarefa";
import ListaTarefas from "./componentes/ListaTarefas";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-TodoList-tarefas";

export default function Main() {
    const [tarefas, setTarefas] = useState([]); //array de dois itens, sendo tarefa o estado, setTarefa passador de parametro(s) e useState funcao de atualizar parametro(s) 

    useEffect(() => {
        const storageTarefas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTarefas) {
            setTarefas(storageTarefas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tarefas));
    }, [tarefas]);

    function adicionaTarefa(lista) { //adiciona uma tarefa
        setTarefas([lista, ...tarefas]);
    }

    function alternaFeito(id) { //alterna a condicao do feito
        setTarefas(
            tarefas.map(lista => {
                if (lista.id === id) {
                    return {
                        ...lista,
                        feito: !lista.feito
                    };
                }
                return lista;
            })
        );
    }

    function removeTarefa(id) {
        setTarefas(tarefas.filter(lista => lista.id !== id));
    }

    return ( //campo de inserir tarefa
        <div className="Main">
            <Typography style={{ padding: 16 }} variant="h1">
                Lista de Tarefas
                </Typography>
            <cadastroTarefa adicionaTarefa={adicionaTarefa} />
            <ListaTarefas
                tarefas={tarefas}
                alternaFeito={alternaFeito}
                removeTarefa={removeTarefa} />

        </div>
    );
} 
import React, { useEffect, useState } from 'react' //useEffect permite fornecer funcionalidades aos dados
import './main.css';
// import cadastroTarefa from './componentes/cadastroTarefa';
import ListaTarefas from "./componentes/ListaTarefas";
import Typography from "@material-ui/core/Typography";
//import {v4 as uuid} from "uuid";
import { Button, TextField } from "@material-ui/core";

const LOCAL_STORAGE_KEY = "react-todolist-tarefas";

export default function Main() {
    const [tarefas, setTarefas] = useState([]); //array de dois itens, sendo tarefa o estado, setTarefas passador de parametro(s) e useState funcao de atualizar parametro(s) 

    useEffect(() => {
        const storageTarefas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTarefas) {
            setTarefas(storageTarefas);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tarefas));
    }, [tarefas]);

    // function adicionaTarefa(lista) { //adiciona uma tarefa
    //     setTarefas([lista, ...tarefas]);
    // }

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

    function handleSubmit(e) { //entrada da tarefa
         e.preventDefault();
        // if (lista.tarefa.trim()) { //trim remove os espacos em branco
        //     adicionaTarefa({ ...lista, id: uuid.v4() });//uuid pacote de id unico e v4 faz ele gerar o id
        //     //reinicia a entrada de tarefa 
        //     setLista({ ...lista, tarefa: "" });
        // }
    }

    const [lista, setLista] = useState ([{
        id: '', //identificador de tarefa
        tarefa: "",  //parametro
        feito: false   //validador
    }]);

    function handleInputChange(e) { //atualiza tarefa
        setLista({ ...lista, tarefa: e.target.value });
        console.log(lista);
    }

    return ( //campo de inserir tarefa
        <div className="Main">
            <Typography style={{ padding: 10 }} variant="h3">
                Lista de Tarefas
           </Typography>
           <form className="cadastro-tarefa" onSubmit={handleSubmit}>
            <TextField
                label="Tarefa"
                name="tarefa"
                type="text"
                value={lista.tarefa}
                onChange={handleInputChange}
            />
            <Button type="submit">Adicionar</Button>
          </form>
            <ListaTarefas
                tarefas={lista}
                alternaFeito={alternaFeito}
                removeTarefa={removeTarefa}
            />
        </div>
    );
} 
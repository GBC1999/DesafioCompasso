import React from 'react';
import {v4 as uuid} from "uuid";
import { Button, TextField } from "@material-ui/core";

function CadastroTarefa({ AdicionaTarefa }) {
    const [lista, setTarefa] = ({
        id: '', //identificador de tarefa
        tarefa: "",  //parametro
        feito: false   //validador
    });

    function handleInputChange(e) { //atualiza tarefa
        setTarefa({ ...lista, tarefa: e.target.value });

    }

    function handleSubmit(e) { //entrada da tarefa
        e.preventDefault();
        if (lista.tarefa.trim()) { //trim remove os espacos em branco
            AdicionaTarefa({ ...lista, id: uuid.v4() });//uuid pacote de id unico e v4 faz ele gerar o id
            //reinicia a entrada de tarefa 
            setTarefa({ ...lista, tarefa: "" });
        }
    }

    return (
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
    );
}


export default CadastroTarefa;
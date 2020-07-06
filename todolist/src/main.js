import React, { Component } from 'react'
import './main.css';
import ListaTarefas from './ListaTarefas'
//import M from 'materialize-css';

export default class Main extends Component {
    constructor(props) { //construtor com o array de tarefas e o objeto com a tarefa atuaç
        super(props);
        this.state = {
            tarefas: [],
            tarefaAtual: {
                text: '', //tarefa
                key: ''  //data que foi inserida
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.adicionaTarefa = this.adicionaTarefa.bind(this);
        this.deletaTarefa = this.deletaTarefa.bind(this);
    }

    handleInput = (e) => { //atualizando a tarefaAtual
        this.setState({
            tarefaAtual:{
                text: e.target.value,
                key: Date.call()
            }
        })
    }

    adicionaTarefa(e){
        e.preventDefault(); //mantem na mesma pagina
        const novaTarefa = this.state.tarefaAtual;
        // console.log(novaTarefa);
        if (novaTarefa.text !== "") {    //validando tarefa
            const novasTarefas = [...this.state.tarefas, novaTarefa];
            this.setState({
                tarefas: novasTarefas,
                tarefaAtual: {
                    text: '', 
                    key: ''  
                } 
            })
        }
    }
    deletaTarefa(key){
        const filtraTarefas = this.state.tarefas.filter(tarefa =>
           tarefa.key !== key 
        );
        this.setState({
            tarefas: filtraTarefas
        })
    }
    render() {
        return ( //campo de inserir tarefa
            <div className="Main">
                <header>
                    <form id="tarefa" onSubmit={this.adicionaTarefa}>
                        <input type="text" placeholder="Digite uma tarefa"
                            value={this.state.tarefaAtual.text}
                            onChange={this.handleInput}/>
                        <br />
                        <button type="submit">Adicionar</button>
                    </form>
                </header>
                <ListaTarefas tarefas= {this.state.tarefas}
                deletaTarefa = {this.deletaTarefa}/>
            </div>
        )
    }
} 
import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Tarefa({ lista, alternaFeito, removeTarefa }) {
    function handleCheckboxClick() {
        alternaFeito(lista.id);
    }
    function handleRemoveClick() {
        removeTarefa(lista.id);
    }

    return (
        <ListItem style={{ display: "flex" }}> {/*flex para redimensionar a tela*/}
            <Checkbox 
                checked={lista.feito} 
                onClick={handleCheckboxClick} 
            />
            <Typography
                variant="body1"
                style={{
                    textDecoration: lista.feito ? "line-through" : null
                }}
            >{lista.tarefa}</Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}
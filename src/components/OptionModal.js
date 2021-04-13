import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.opcaoSelecionada} // Aqui fazemos um double flip pra transformar em booleano.
        onRequestClose = {props.limpaOpcao} // Função que é disparada quando clicamos fora do modal, ou apertamos ESC.
        contentLabel = "Opção selecionada"
    >
        <h3>Opção selecionada:</h3>
        {props.opcaoSelecionada && <p>{props.opcaoSelecionada}</p>}
        <button onClick={props.limpaOpcao}>Fechar</button>
    </Modal>
);

export default OptionModal
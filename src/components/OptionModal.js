import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.opcaoSelecionada} // Aqui fazemos um double flip pra transformar em booleano.
        onRequestClose = {props.limpaOpcao} // Função que é disparada quando clicamos fora do modal, ou apertamos ESC.
        contentLabel = "Opção selecionada"
        closeTimeoutMS={300}
        className="modal"
    >
        <h3 className="modal__title">Opção selecionada:</h3>
        {props.opcaoSelecionada && <p className="modal__option">{props.opcaoSelecionada}</p>}
        <button className="button" onClick={props.limpaOpcao}>Fechar</button>
    </Modal>
);

export default OptionModal
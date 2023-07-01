import React, { useState } from 'react'
import './ModalStyles.css'
import Input from '../../../../Login/components/Input';
import Button from '../../../../Login/components/Button';

const EditAchados = ({ item, onUpdate, onClose, buttonCancel }) => {
    const [editedItem, setEditedItem] = useState({ ...item });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    const handleUpdate = () => {
        fetch(`/achados/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedItem),
        })
            .then((response) => response.json())
            .then((data) => {
                onUpdate(data);
                onClose();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleCancel = () => {
        buttonCancel();
      };

    return (
        <>
        {}
            <div className='content__edit'>
                <h2>Editar item achados</h2>
                <form className='form__content-edit'>
                    <label>
                        Item:
                        <Input type="text"
                            name="nome_item"
                            value={editedItem.nome_item || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Descrição:
                        <Input type="text"
                            name="descricao"
                            value={editedItem.descricao || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Local:
                        <Input type="text"
                            name="local"
                            value={editedItem.local || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Quem achou:
                        <Input type="text"
                            name="quem_achou"
                            value={editedItem.quem_achou || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Hora aproximada:
                        <Input type="time"
                            name="hora_aproximada"
                            value={editedItem.hora_aproximada || ''}
                            onChange={handleInputChange} />
                    </label>
                    <div className='group__time-option'>
                    <label for="option-input">Dono encontrado: </label>
                    <select className='option-additem' id="option-input">
                        <option value="" disabled selected>Selecione uma opção</option>
                        <option value="yes"> Sim</option>
                        <option value="no"> Não</option>
                    </select>
                </div>
                    <div className="button-group">
                        <Button className='button__save' onClick={handleUpdate} type="submit">Salvar</Button>
                        <Button className='button__cancel' onClick={handleCancel} type="button">
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditAchados

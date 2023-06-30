import React, { useState } from 'react'
import Input from '../../../../Login/components/Input';
import Button from '../../../../Login/components/Button';
import './AchadosStyles.css'

const CadastrarAchados = ({ item }) => {
    const [AddItem, setAddItem] = useState({ ...item });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddItem({ ...AddItem, [name]: value });
    };

    return (
        <div className='content__edit'>
            <h2>Adicionar novo item</h2>
            <form className='form__content-edit'>
                <label>
                    Item:
                    <Input type="text"
                        name="nome_item"
                        value={AddItem.nome_item || ''}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Descrição:
                    <Input type="text"
                        name="descricao"
                        value={AddItem.descricao || ''}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Local:
                    <Input type="text"
                        name="local"
                        value={AddItem.local || ''}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Quem achou:
                    <Input type="text"
                        name="quem_achou"
                        value={AddItem.quem_achou || ''}
                        onChange={handleInputChange} />
                </label>
                <div className='group__time-option'>
                    <label>
                        Hora aproximada:
                        <Input type="time"
                            name="hora_aproximada"
                            value={AddItem.hora_aproximada || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label for="option-input">Dono encontrado: </label>
                    <select className='option-additem' id="option-input">
                        <option value="" disabled selected>Selecione uma opção</option>
                        <option value="yes"> Sim</option>
                        <option value="no"> Não</option>
                    </select>
                </div>
                <div className="button-group">
                    <Button className='button__save' type="submit">Salvar</Button>
                    <Button className='button__cancel' type="button">
                        Cancelar
                    </Button>
                </div>
            </form>
        </div >
    )
}

export default CadastrarAchados
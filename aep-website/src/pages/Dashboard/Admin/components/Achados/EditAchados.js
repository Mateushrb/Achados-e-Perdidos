import React, { useState } from 'react'
import './ModalStyles.css'
import Input from '../../../../Login/components/Input';
import Button from '../../../../Login/components/Button';
import API from '../../../../../services/api';

const EditAchados = (props) => {
    const {
        productData,
        onCancel,
        onClose,
    } = props
    const [product, setProduct] = useState({ ...productData });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleUpdate = () => {
        API.updateAchados(product.id, product)
            .then(() => onClose())
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className='content__edit'>
                <h2>Editar item achados</h2>
                <form className='form__content-edit' onSubmit={handleUpdate}>
                    <label>
                        Item:
                        <Input type="text"
                            name="nome_item"
                            value={product.nome_item || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Descrição:
                        <Input type="text"
                            name="descricao"
                            value={product.descricao || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Local:
                        <Input type="text"
                            name="local"
                            value={product.local || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Quem achou:
                        <Input type="text"
                            name="quem_achou"
                            value={product.quem_achou || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Data:
                        <Input type="date"
                            name="data"
                            value={product.data || ''}
                            onChange={handleInputChange} />
                    </label>
                    <label>
                        Hora aproximada:
                        <Input type="time"
                            name="hora_aproximada"
                            value={product.hora_aproximada || ''}
                            onChange={handleInputChange} />
                    </label>
                    <div className="button-group">
                        <Button className='button__save' onClick={handleUpdate} type="button">Salvar</Button>
                        <Button className='button__cancel' onClick={onCancel} type="button">
                            Cancelar
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditAchados

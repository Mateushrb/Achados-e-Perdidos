import React, { useState } from 'react'
import Input from '../../../../Login/components/Input';
import Button from '../../../../Login/components/Button';
import '../Achados/AchadosStyles.css'
import API from '../../../../../services/api';

const CadastrarPerdidos = (props) => {
    const {
        productData,
        onCancel,
        onClose,
    } = props
    const [product, setProduct] = useState({ ...productData});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handlePost = () => {
        API.postPerdido(product)
            .then(() => onClose())
            .catch((error) => console.log(error))
    }

    return (
        <div className='content__edit'>
            <h2>Adicionar novo item</h2>
            <form className='form__content-edit' onSubmit={handlePost}>
                <label>
                    Item:
                    <Input type="text"
                        name="nome_item"
                        value={product.nome_item || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Descrição:
                    <Input type="text"
                        name="descricao"
                        value={product.descricao || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Local:
                    <Input type="text"
                        name="local"
                        value={product.local || ''}
                        onChange={handleInputChange} />
                </label>
                <label>
                    Quem perdeu:
                    <Input type="text"
                        name="nome"
                        value={product.nome || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    E-mail:
                    <Input type="text"
                        name="email"
                        value={product.email || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Telefone:
                    <Input type="text"
                        name="telefone"
                        value={product.telefone || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Hora aproximada:
                    <Input type="time"
                        name="hora_aproximada"
                        value={product.hora_aproximada || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <div className="button-group">
                    <Button className='button__save' type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Salvando...' : 'Salvar'}
                    </Button>
                    {isSaved && <span>Item salvo com sucesso!</span>}
                    <Button className="button__cancel" onClick={onCancel} type="button">
                        Cancelar
                    </Button>
                </div>
            </form>
        </div >
    )
}

export default CadastrarPerdidos
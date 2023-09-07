import React, { useState } from 'react'
import Input from '../../../../Login/components/Input';
import Button from '../../../../Login/components/Button';
import './AchadosStyles.css'

const CadastrarAchados = ({ item }) => {
    const [AddItem, setAddItem] = useState({ ...item });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddItem({ ...AddItem, [name]: value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setAddItem((prevItem) => ({ ...prevItem, imagem: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        fetch('url da api/achados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Novo item adicionado:', data);
            })
            .catch((error) => {
                console.error('Erro ao adicionar o item:', error);
            })
            .then((data) => {
                console.log('Novo item adicionado:', data);
                setIsSaved(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <div className='content__edit'>
            <h2>Adicionar novo item</h2>
            <form className='form__content-edit' onSubmit={handleSubmit}>
                <label>
                    Item:
                    <Input type="text"
                        name="nome_item"
                        value={AddItem.nome_item || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Descrição:
                    <Input type="text"
                        name="descricao"
                        value={AddItem.descricao || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Local:
                    <Input type="text"
                        name="local"
                        value={AddItem.local || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Quem achou:
                    <Input type="text"
                        name="quem_achou"
                        value={AddItem.quem_achou || ''}
                        onChange={handleInputChange}
                        required />
                </label>

                <label>
                    Hora aproximada:
                    <Input type="time"
                        name="hora_aproximada"
                        value={AddItem.hora_aproximada || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <div className='group__time-option'>
                    <label>Adicionar uma imagem:
                        <Input
                            type="file"
                            name="imagem"
                            onChange={handleImageChange}
                            required />
                    </label>
                </div>
                <div className="button-group">
                    <Button className='button__save' type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Salvando...' : 'Salvar'}
                    </Button>
                    {isSaved && <span>Item salvo com sucesso!</span>}
                </div>
            </form>
        </div >
    )
}

export default CadastrarAchados
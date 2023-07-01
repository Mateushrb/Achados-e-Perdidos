import React, { useState } from 'react'
import Input from '../../../../Login/components/Input';
import Button from '../../../../Login/components/Button';
import '../Achados/AchadosStyles.css'

const CadastrarPerdidos = ({ item }) => {
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

        fetch('http://45.235.53.125:8080/perdidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Novo item adicionado:', data);
                // Realize as ações necessárias após adicionar o novo item
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
                        onChange={handleInputChange} />
                </label>
                <label>
                    Quem perdeu:
                    <Input type="text"
                        name="quem_perdeu"
                        value={AddItem.nome || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    E-mail:
                    <Input type="text"
                        name="email"
                        value={AddItem.email || ''}
                        onChange={handleInputChange}
                        required />
                </label>
                <label>
                    Telefone:
                    <Input type="text"
                        name="telefone"
                        value={AddItem.telefone || ''}
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

export default CadastrarPerdidos
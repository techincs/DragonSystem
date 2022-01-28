import { useState, useEffect } from 'react';
import { api } from '../../api/api';
import { useParams, useNavigate } from 'react-router';

import * as ST from './styles';

export const RegisterDragon = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [id , setId] = useState('0');
    const [name , setName] = useState('');
    const [tipo , setTipo] = useState('');
    const [histories , setHistories] = useState('');

    useEffect(() => {
        if (params.id) {
           setId(params.id);
           loadDragonItem(params.id);
        }  else setId('0');
    },[id]);

    const loadDragonItem = async (id : string) => {
        await api.getDragon(id).then(data => {
            setName(data.name); 
            setTipo(data.type); 
            setHistories(data.histories); 
        });
    }

    const handleBackButton = () => { 
        navigate(-1);
    }

    const insertDragon = async () => {
         const ndragon = {
             name: name,
             type: tipo,
             histories: histories
         }
         await api.createDragon(ndragon).then(data => {
            alert('Dragão gravado com sucesso!');
            navigate('/home');
         }).catch(error => {
            alert('Erro: Gravando Dragão!');
         });
    }

    const updateDragon = async () => {
        const udragon = {
            id: id,
            name: name,
            type: tipo,
            histories: histories
        }
        await api.updateDragon(id, udragon).then(data => {
           alert('Dragão alterado com sucesso!');
           navigate('/home');
        }).catch(error => {
           alert('Erro: Alterando Dragão!');
        });
   }

   const handleConfirmButton = () => { 
     if (id === '0'){
        insertDragon();
     } else {
        updateDragon();
     }
   }

    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                        Cadastro de Dragões
                </ST.HeaderText>
            </ST.Header>
            <ST.Body>
            <ST.InputArea>
                <ST.ButtonArea>

                   <ST.InputLabel> 
                       <ST.InputTitle>Nome</ST.InputTitle> 
                       <ST.Input type="text" placeholder="Digite o Nome do Dragão." value={name} onChange={e=>setName(e.target.value)} />
                   </ST.InputLabel> 

                   <ST.InputLabel> 
                       <ST.InputTitle>Tipo</ST.InputTitle> 
                       <ST.Input type="text" placeholder="Digite o Tipo do Dragão." value={tipo} onChange={e=>setTipo(e.target.value)} /> 
                   </ST.InputLabel> 

                   <ST.InputLabel> 
                       <ST.InputTitle>História</ST.InputTitle> 
                       <ST.Input type="text" placeholder="Digite a História do Dragão." value={histories} onChange={e=>setHistories(e.target.value)} /> 
                   </ST.InputLabel>  

                </ST.ButtonArea>  
                       <ST.Btn onClick={handleConfirmButton}> Gravar </ST.Btn>  
                       <ST.Btn onClick={handleBackButton}>Voltar</ST.Btn>

            </ST.InputArea>
            </ST.Body> 
        </ST.Container> 
    );
}
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { Dragon } from '../../types/Dragon'; 
import { useParams, useNavigate } from 'react-router';

import * as ST from './styles';
import { formatDate } from '../../helpers/dateParse';


export const DragonSelect = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading , setLoading] = useState(false);
    const [dragon , setDragon] = useState<Dragon>();

    useEffect(() => {
        if (params.id) {
           loadDragonItem(params.id);
        }  
    },[]);

    const loadDragonItem = async (id : string) => {
        setLoading(true);
        await api.getDragon(id).then(data => {
        
            setDragon(data);
            setLoading(false);

        });
    }
    const handleBackButton = () => { 
        navigate(-1);
    }

    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                        Dragão : {dragon?.name}
                </ST.HeaderText>
            </ST.Header>
            <ST.Body>
            <ST.MontArea>
                <ST.MontInfo>
                    
                    {loading && <> <br/> "Carregando ..."</>}

                    <ST.DescricaoText>Data de Criação<ST.ItemText>{dragon? formatDate( new Date(dragon.createdAt)): ''} </ST.ItemText> </ST.DescricaoText> 
                    <ST.DescricaoText>Tipo<ST.ItemText>{dragon?.type}</ST.ItemText> </ST.DescricaoText>
                
                    
                </ST.MontInfo>  
                
                <ST.Btn onClick={handleBackButton}>Voltar</ST.Btn>
                </ST.MontArea>
            </ST.Body>  
        </ST.Container> 
    );
}
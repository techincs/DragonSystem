import { useNavigate } from 'react-router';

import * as ST from './styles';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleBackButton = () => { 
        navigate(-1);
    }

    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                        Sistema Cadastro de Dragões
                </ST.HeaderText>
            </ST.Header>
            <ST.Body>
            <ST.MontArea>
                <ST.MontInfo>
                    <ST.DescricaoText>Página não encontrada!</ST.DescricaoText> 
                </ST.MontInfo>  
                <ST.Btn onClick={handleBackButton}>voltar</ST.Btn>
                </ST.MontArea>
            </ST.Body>  
        </ST.Container> 
    );
}
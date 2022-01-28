import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setLogin, setToken, setAuth } from '../../redux/reducers/userReducer';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

import * as ST from './styles';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const user = useAppSelector(state => state.user)

    useEffect(() => {
        changeLogin('');
        changeToken('');
        changeAuth(false)
    },[]);

  
    const changeLogin = (nLogin:string) => dispatch(setLogin(nLogin));
    const changeToken = (nToken:string) => dispatch(setToken(nToken));
    const changeAuth = (nAuth:boolean) => dispatch(setAuth(nAuth));
  
    const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       changeLogin(e.target.value);
    }
  
    const handleTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       changeToken(e.target.value);
    }
  
    const handleLogar = () => {
        if ((user.login.toLocaleUpperCase() === 'DRAGON') &&
           (user.token.toLocaleUpperCase() === 'DRAGON')){
            changeAuth(true)
            navigate('/home');
         } else {
            changeAuth(false);
            alert('Senha Inválida');
         }
   }

    return (
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                      Sistema Cadastro de Dragões
                </ST.HeaderText>
            </ST.Header>
            <ST.Body>
            <ST.InputArea>
                <ST.ButtonArea>

                     <ST.InputLabel> 
                         <ST.InputTitle>Usuário</ST.InputTitle> 
                         <ST.Input type="text" placeholder="Digite o Usuário." value={user.login} onChange={handleLoginInput} />
                     </ST.InputLabel> 

                     <ST.InputLabel> 
                          <ST.InputTitle>Senha</ST.InputTitle> 
                         <ST.Input type="password" placeholder="Digite a Senha." value={user.token} onChange={handleTokenInput} /> 
                     </ST.InputLabel>  

                </ST.ButtonArea>  
                   <ST.Btn onClick={handleLogar}> Login </ST.Btn>        
            </ST.InputArea>
            </ST.Body>
        </ST.Container> 
    );
}
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { Dragon } from '../../types/Dragon'; 
import { TableDragon } from '../../components/TableDragons/tableDragons';
import { useNavigate } from 'react-router';

import * as ST from './styles';

export const Home = () => {
    const navigate = useNavigate();
    const [loading , setLoading] = useState(false);
    const [list , setList] = useState<Dragon[]>([]);

    useEffect(() => {
        loadDragonList();
    },[]);

    const loadDragonList = async () => {
        setLoading(true);
        await api.getDragonsList().then(data => {

            data.sort(function(a : any, b : any){
                if(a.name < b.name){
                    return -1;
                } else {
                    return true;
                }
            });

            setList(data);
            setLoading(false);

        })
    }

    const handleRegistreDragon = () => { 
         navigate('/dragon/register');
    }

    const handleLogOff = () => { 
        navigate('/');
    }

    return (     
        <ST.Container>
            <ST.Header>
                <ST.HeaderText>
                       Lista de Dragões
                </ST.HeaderText>
        
            </ST.Header>
            <ST.Body>
                 {loading && <> <br/> "Carregando ..."</>}

                  <TableDragon list={list} loadDragonList={loadDragonList}/>
                 
                  <ST.Btn  onClick={handleRegistreDragon}>Cadastrar</ST.Btn>   
                  <ST.Btn  onClick={handleLogOff}>Sair</ST.Btn>   
            </ST.Body>
        </ST.Container> 
    );
}
import { formatDate } from '../../helpers/dateParse';
import { api } from '../../api/api';
import { Dragon } from  '../../types/Dragon';
import { useNavigate } from 'react-router';
import * as ST from './styles';

type Props = {
    item: Dragon,
    loadDragonList: Function
}

export const TableDragonItem = ({ item, loadDragonList }: Props) => {
    const navigate = useNavigate();

    const deletDragon = async () => {
        await api.deleteDragon(item.id).then(data => {
           alert('Dragão excluido com sucesso');
           loadDragonList();
        }).catch(error => {
           alert('Erro: excluindo dragão!');
        });
    }

    const updateDragon = async () => {
        navigate(`/dragon/update/${item.id}`);
    }

    return(
        <ST.TableLine> 
            <ST.TablesColumn><ST.TRLink to={`/dragon/${item.id}`}>{item.id}</ST.TRLink></ST.TablesColumn>
            <ST.TablesColumn><ST.TRLink to={`/dragon/${item.id}`}>{item.name}</ST.TRLink></ST.TablesColumn>
            <ST.TablesColumn><ST.TRLink to={`/dragon/${item.id}`}>{item.type}</ST.TRLink></ST.TablesColumn>
            <ST.TablesColumn><ST.TRLink to={`/dragon/${item.id}`}>{item.histories}</ST.TRLink></ST.TablesColumn>
            <ST.TablesColumn><ST.TRLink to={`/dragon/${item.id}`}>{formatDate(new Date(item.createdAt))}</ST.TRLink></ST.TablesColumn>
            <ST.TablesColumn><ST.Btn onClick={updateDragon} background={'darkblue'}>Altera</ST.Btn></ST.TablesColumn>
            <ST.TablesColumn><ST.Btn onClick={deletDragon} background={'darkred'}>Excluir</ST.Btn></ST.TablesColumn>
        </ST.TableLine>
    );
}
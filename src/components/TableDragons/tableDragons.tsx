import * as ST from './styles';
import { TableDragonItem } from '../TableDragonItem/tableDragonItem';
import  { Dragon } from  '../../types/Dragon';

type Props = {
    list: Dragon[],
    loadDragonList: Function 
}

export const TableDragon = ({ list, loadDragonList }: Props) => {
    return(
        <ST.Table>
            <thead>
                 <tr>
                     <ST.TableHeadColumn width={30}>ID</ST.TableHeadColumn> 
                     <ST.TableHeadColumn width={120}>Nome</ST.TableHeadColumn> 
                     <ST.TableHeadColumn width={80}>Tipo</ST.TableHeadColumn> 
                     <ST.TableHeadColumn >História</ST.TableHeadColumn> 
                     <ST.TableHeadColumn width={70}>Data</ST.TableHeadColumn> 
                     <ST.TableHeadColumn width={70}></ST.TableHeadColumn> 
                     <ST.TableHeadColumn width={70}></ST.TableHeadColumn> 
                 </tr>
            </thead>
            <tbody>
                {list.map((item, index) =>(
                   <TableDragonItem key={index} item={item} loadDragonList={loadDragonList} />
                ))}
            </tbody>
        </ST.Table>      
    );
}
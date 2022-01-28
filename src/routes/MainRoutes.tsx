import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

import { Login } from  '../pages/Login/login';
import { Home }  from  '../pages/Home/home';
import { DragonSelect } from '../pages/DragonSelect/dragonSelect';
import { RegisterDragon } from '../pages/RegisterDragon/registerDragon';
import { NotFound } from '../pages/NotFound/notFound'; 

export const MainRoutes = () => {
    return (
       <Routes>
           <Route path="/" element={<Login /> } />
           <Route path="/home" element={<RequireAuth> 
                                           <Home />  
                                        </RequireAuth> } />
           <Route path="/dragon/:id" element={<RequireAuth>
                                                        <DragonSelect /> 
                                                     </RequireAuth> } />
           <Route path="/dragon/register" element={<RegisterDragon /> } />
           <Route path="/dragon/update/:id" element={<RegisterDragon /> } />
           <Route path="*" element={<NotFound /> } />
       </Routes>    
    );
}
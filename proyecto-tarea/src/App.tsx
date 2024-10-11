// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TareaForm from './componentes/TareaForm';
import TareaLista from './componentes/TareaLista';
import useTareas from './hooks/useTareas';
import TareaContadas from './componentes/TareaContadas';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import './css/App.css';
import Login from './componentes/Login';
import Registro from './componentes/Register';
import RevistaForm from './componentes/RevistaForm';

function App() {
    const { tareas, agregarTarea, eliminarTarea, marcado, tareasContadas } = useTareas();

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route
                        path="/tareas"
                        element={
                            <>
                                <TareaContadas
                                    totalDeTareas={tareasContadas.totalDeTareas}
                                    completadas={tareasContadas.completadas}
                                    eliminadas={tareasContadas.eliminadas}
                                />
                                <h1>Notas de Tareas</h1>
                                <TareaForm agregarTarea={agregarTarea} />
                                <TareaLista 
                                    tareas={tareas} 
                                    eliminarTarea={eliminarTarea} 
                                    marcado={marcado} 
                                />
                            </>
                        }
                    />
                    <Route path='/login' element={<Login />}/>
                    <Route path='/registro' element={<Registro/>}/>
                    <Route path='/new_revista' element={<RevistaForm/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

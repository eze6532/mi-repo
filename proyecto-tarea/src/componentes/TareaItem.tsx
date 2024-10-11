import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface Tarea {
    id: number;
    nombre: string;
    completada: boolean;
}

interface TareaItemProps {
    tarea: Tarea;
    eliminarTarea: (id: number) => void;
    marcado: (id: number) => void;
}

const TareaItem: React.FC<TareaItemProps> = ({ tarea, eliminarTarea, marcado }) => {

    return (
        <li className="tarea-item">
            <input 
                type="checkbox" 
                checked={tarea.completada} 
                onChange={() => marcado(tarea.id)} 
                className="custom-tarea"
            />
            
            <span className={tarea.completada ? 'completed' : ''}>
                {tarea.nombre}
            </span>

            <button 
                className="bi bi-x-circle custom-icon" 
                onClick={() => tarea.completada ? eliminarTarea(tarea.id):''}
            > 
                Borrar
            </button>
        </li>
    );
};

export default TareaItem;

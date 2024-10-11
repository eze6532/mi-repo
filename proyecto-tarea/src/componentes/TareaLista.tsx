import React from "react";
import TareaItem from "./TareaItem";
import { Tarea } from "./TareaItem";

interface TareaListaProps {
    tareas: Tarea[];
    eliminarTarea: (id: number) => void;
    marcado: (id: number) => void;
}

const TareaLista: React.FC<TareaListaProps> = ({ tareas, eliminarTarea, marcado }) => {
    return (
        <ul>
            { 
                tareas.map((tarea: Tarea) => 
                    <TareaItem 
                        key={`id_${tarea.id}`} 
                        tarea={tarea} 
                        eliminarTarea={eliminarTarea} 
                        marcado={marcado} 
                    />
                )
            }
        </ul>
    );
};

export default TareaLista;

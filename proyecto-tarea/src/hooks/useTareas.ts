import { useState } from 'react';
import { Tarea } from '../componentes/TareaItem';
import { TareaContadas } from '../componentes/TareaContadas';



interface UseTareasReturn {
    tareas: Tarea[];
    tareasContadas: TareaContadas; 
    agregarTarea: (nombre: string) => void;
    eliminarTarea: (id: number) => void;
    marcado: (id: number) => void;
}

const useTareas  = (): UseTareasReturn => {
    const [tareas, setTareas] = useState<Tarea[]>([]);
    const [tareasContadas, setTareasContadas] = useState<TareaContadas>({
        totalDeTareas: 0,
        completadas: 0,
        eliminadas: 0,
    });

    const agregarTarea = (nombre: string) => {
        const nuevaTarea: Tarea = {
            id: Date.now(),
            nombre,
            completada: false,
        };
        setTareas(prevTareas => [...prevTareas, nuevaTarea]);
        setTareasContadas(prev => ({
            ...prev,
            totalDeTareas: prev.totalDeTareas + 1,
        }));
    };

    const eliminarTarea = (id: number) => {
        setTareas(prevTareas => prevTareas.filter(t => t.id !== id));
        setTareasContadas(prev => ({
            ...prev,
            eliminadas: prev.eliminadas + 1,
            totalDeTareas: prev.totalDeTareas - 1,
        }));
    };

    const marcado = (id: number) => {
        setTareas(prevTareas =>
            prevTareas.map(t =>
                t.id === id ? { ...t, completada: !t.completada } : t
            )
        );
        setTareasContadas(prev => ({
            ...prev,
            completadas: prev.completadas + (tareas.find(t => t.id === id)?.completada ? -1 : 1),
        }));
    };

    return { tareas, tareasContadas, agregarTarea, eliminarTarea, marcado }; 
};

export default useTareas;

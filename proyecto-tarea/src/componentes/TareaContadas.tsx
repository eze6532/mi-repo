import React from 'react';

export interface TareaContadas {
    totalDeTareas: number;
    completadas: number;
    eliminadas: number;
}



const TareaContadas: React.FC<TareaContadas> = ({ totalDeTareas, completadas, eliminadas }) => {
    return (
        <div className='contador'>
            <p className='contDeTareasAct'>Total de Tareas Activas: {totalDeTareas} </p>
            <p className='contDeTareasCompl'>Tareas Completadas: {completadas}</p>
            <p className='contDeTareasElim'>Tareas Eliminadas: {eliminadas}</p>
        </div>
    );
};

export default TareaContadas;

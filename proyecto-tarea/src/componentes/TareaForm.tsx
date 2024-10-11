import React, { useState } from 'react';

interface TareaFormProps {
    agregarTarea: (nombre: string) => void;
}

const TareaForm: React.FC<TareaFormProps> = ({ agregarTarea }) => {
    const [nombreTarea, setNombreTarea] = useState<string>('');

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        if (nombreTarea.trim() === '') {
            alert('Debe de darle un nombre a la tarea nueva.')
            return
        };

        agregarTarea(nombreTarea);
        setNombreTarea('');
    };

    return (
        
        <form >
            <input
                type="text"
                value={nombreTarea}
                onChange={(e) => setNombreTarea(e.target.value)}
                placeholder="Nombre de la tarea"
                className='input'

            />
            <button type="submit" onClick={manejarEnvio}>Agregar Tarea</button>
        </form>
    );
};

export default TareaForm;

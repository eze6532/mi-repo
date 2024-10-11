import { useState, Dispatch, SetStateAction } from "react";


interface UseRevistaNew {
    titulo: string;
    setTitulo: Dispatch<SetStateAction<string>>;
    editorial: string;
    setEditorial: Dispatch<SetStateAction<string>>;
    categoria: string;
    setCategoria: Dispatch<SetStateAction<string>>;
    ejemplares: number;
    setEjemplares: Dispatch<SetStateAction<number>>;
    fechaDePublicacion: string;
    setFechaDePublicacion: Dispatch<SetStateAction<string>>;
    descripcion: string;
    setDescripcion: Dispatch<SetStateAction<string>>;
}

const useRevistaNew=():UseRevistaNew=>{

    const [titulo, setTitulo]= useState<string>('');
    const [editorial, setEditorial]= useState<string>('');
    const [categoria, setCategoria]= useState<string>('');
    const [ejemplares, setEjemplares]= useState<number>(1);
    const [fechaDePublicacion, setFechaDePublicacion]= useState<string>('');
    const [descripcion, setDescripcion]= useState<string>('');

    return{
        titulo,
        setTitulo,
        editorial,
        setEditorial,
        categoria,
        setCategoria,
        ejemplares,
        setEjemplares,
        fechaDePublicacion,
        setFechaDePublicacion,
        descripcion,
        setDescripcion,
    }

}
export default useRevistaNew;
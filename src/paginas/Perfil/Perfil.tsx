import { useNavigate } from "react-router-dom";
import type { UsuarioPerfil } from "../../modelos/Usuario";
import { useEffect, useState } from "react";
import { getUserId } from "../../api/api.auth";
import api from "../../api/api.compartoDeptoAR";
import FormularioPerfil from "../../componentes/FormularioPerfil/FormularioPerfil";



const Perfil =()=>{

    const [perfil, setPerfil] = useState<UsuarioPerfil>();
    const navigate = useNavigate();
 
 
    useEffect(() => {
        /*
        const fetchData = async () => {
        try {
            const data = await api.usuario.perfil(getUserId.arguments)
            setPerfil(data);
        } catch (error) {
            console.error(error);
        }};

        fetchData();
        */
       const usuario1: UsuarioPerfil = {
           nombreCompleto: "Usuario01",
           edad: 19,
           genero: "Masculino",
           descripcion: "Hola mundo, soy el usuario01 y estoy muuuuuy feliz de estar aca y que me puedas leer, puto de mierda",
           habitos: ["Cocino en casa","Fumador","Tengo mascotas"],
           preferencias: ["No me molesta que fumen","Ok con horarios nocturnos","Prefiero alguien tranquilo"],
       }
       setPerfil(usuario1)
    }, []);



    return <>
        { !perfil ?
            <div>
            Cargando...
            </div>
            :
            <FormularioPerfil
            perfil={perfil}
            onGuardar={()=>{console.log('se guardo, que emocion')}}
             onCancelar={()=>navigate('/')}
            />
        }
           </>
            
}

export default Perfil;
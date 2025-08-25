import { useNavigate } from "react-router-dom";
import type { Genero, HabitosOpciones, PreferenciaOpciones, UsuarioPerfil } from "../../modelos/Usuario";
import { useEffect, useState } from "react";
import { getUserId } from "../../api/api.auth";
import api from "../../api/api.compartoDeptoAR";

/*
nombreCompleto={nombreCompleto}
                correo={correo}
                edad={edad || 0}
                genero={genero}
                descripcion={descripcion}
                habitos={habitos}
                preferencia={preferencia}
                setEdad={setEdad}
                setGenero={setGenero}
                setDescripcion={setDescripcion}
                setHabitos={setHabitos}
                setPreferencia={setPreferencia}
                setNombreCompleto={setNombre}
                setCorreo={setCorreo}

*/

const Perfil =()=>{
/*
    const [nombreCompleto, setNombre] = useState<string>("");
    const [correo, setCorreo] = useState<string>("");
    const [edad, setEdad] = useState<number | undefined>(undefined);
    const [genero, setGenero] = useState<Genero>("Prefiero no decir");
    const [descripcion, setDescripcion] = useState<string>("");
    const [habitos, setHabitos] = useState<HabitosOpciones[]>([]);
    const [preferencia, setPreferencia] = useState<PreferenciaOpciones[]>([]);
*/
    const [perfil, setPerfil] = useState<UsuarioPerfil>();
    const navigate = useNavigate();
 
 
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await api.usuario.perfil(getUserId.arguments)
            setPerfil(data);
        } catch (error) {
            console.error(error);
        }};

        fetchData();
    }, []);



    return <>
        { !perfil ?
            <div>
            Cargando...
            </div>
            :
            <FormularioPerfil
                perfil={perfil}
                
                onGuardar={() => {}}
                onCancelar={() => navigate('/')}
            />
        }
        </>
            
}

export default Perfil;
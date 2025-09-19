import type { UsuarioPerfil } from "../../modelos/Usuario";
import { useEffect } from "react";
import FormularioPerfil from "../../componentes/FormularioPerfil/FormularioPerfil";
import { useUsuario } from "../../contexts/UsuarioContext";


/*
const PerfilView =()=>{

    const [perfil, setPerfil] = useState<UsuarioPerfil>();

 
 
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
        *
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
                modo="view" />

        }
           </>
            
}
*/
const PerfilView = () => {
  const { perfil, setPerfil } = useUsuario();

  useEffect(() => {
    const usuario1: UsuarioPerfil = {
      nombreCompleto: "Usuario01",
      edad: 19,
      genero: "Masculino",
      descripcion: "Hola mundo, soy el usuario01 y estoy muuuuuy feliz de estar aca",
      habitos: ["Cocino en casa", "Fumador", "Tengo mascotas"],
      preferencias: ["No me molesta que fumen", "Ok con horarios nocturnos", "Prefiero alguien tranquilo"],
    };
    setPerfil(usuario1);
  }, []);

  if (!perfil) return <div>Cargando...</div>;

  return (
    <FormularioPerfil perfil={perfil} modo="view" />
  );
};


export default PerfilView;
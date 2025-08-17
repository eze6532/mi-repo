import RegistroFormProps from "../../componentes/FormularioRegistro/RegistroFormProps";


const RegistroPage = ()=>{
    const navigate = useNavigate();
    const api = useAPI()


    const handleGuardar = async(mascota: Digimon) => {
        await api.digimon.create(mascota);
        navigate('/');
    }

    return (
        <RegistroFormProps
            
        />
    );
};


export default RegistroPage;
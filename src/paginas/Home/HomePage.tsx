import { useNavigate } from "react-router-dom";

const HomePage =()=>{
    const navigate = useNavigate();

    
    return(
        <>
        hola mundo!!!, por el momento no hay nada pero pronto pondremos las publicaciones...
        <button onClick={()=>navigate("/crear-publicacion")}>Crear Publicacion</button>

        </>
    )
}

export default HomePage;
import useLogin from '../hooks/useLogin';
import '../css/Login.css';

const Login = () => {
    const { 
        userRef, 
        errRef, 
        username, 
        password, 
        errMsg, 
        success, 
        setUsername, 
        setPassword, 
        handleSubmit 
    } = useLogin();

    return (
        <>
            { success ? (
                <section>
                    <h1>Se inició sesión!</h1>
                    <br />
                    <p>
                        <a href="#">Ir al usuario</a>
                    </p>
                </section>
            ) : ( 
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Inicia sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Usuario o Correo Electrónico:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Iniciar</button>
                    </form>
                </section>
            )}
        </>
    );
};

export default Login;

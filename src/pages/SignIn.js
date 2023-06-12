import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

function SignIn() {
    const navigate = useNavigate();
    const authData = useContext(AuthContext);
    const { login } = authData;

    const handleSignIn = () => {
        // Voer hier de logica uit om in te loggen

        // Als het inloggen succesvol is, roep de login-functie aan om isAuthenticated naar true te zetten
        login();

        // Navigeer naar de profielpagina na het inloggen
        navigate('/profile');
    };

    return (
        <>
            <h1>Inloggen</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias
                qui quo unde?
            </p>

            <form>
                <p>*invoervelden*</p>
                <button type="button" onClick={handleSignIn}>
                    Inloggen
                </button>
            </form>

            <p>
                Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.
            </p>
        </>
    );
}

export default SignIn;

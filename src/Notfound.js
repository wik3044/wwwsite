import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="error-page">
            <h1>Nie znaleziono strony</h1>
            <p>Przepraszamy, ale strona, której szukasz, nie istnieje.</p>
            <Link to="/">
                <button>Powrót na strone główną</button>
            </Link>
        </div>
    );
};

export default NotFound;
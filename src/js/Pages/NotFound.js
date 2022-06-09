import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="view--not-found">
            <div className="not-found--container">
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
        </div>
    )
}

export default ErrorPage


/**
 * It returns a div with a class of view--not-found, which contains a div with a class of not-found--container, which
 * contains a paragraph that says "Oups! La page que vous demandez n'existe pas."
 * @returns A React component
 */
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

import { Link, useLocation, useNavigate } from "react-router-dom";
import NavMenu from "../components/navMenu";

function VideoRecipeView (){
    const location = useLocation();
    const navigate = useNavigate()
    const { 
        titulo = "Sin titulo",
        autor = "null"
    } = location.state || {};
    return (
        <>
            <header>
                <NavMenu/>
            </header>
            <main>
                <article className="container mt-5">
                    <div className="row justify-content-center">
                        <header className="col-md-8 text-center">
                            <h1 className="mb-4">{titulo}</h1>
                            <p className="text-muted mb-3">Por: <strong>{autor}</strong></p>
                        </header>
                    </div>
                    <div className="justify-content-center">
                        <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nW7M5HiM5NE?si=NfHSbU3VUMnLsLfN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <Link to={'/cc-ad'} target="_blank">Consulta CC y descripcion por audio</Link>
                    </div>
                    <button type="button" className="btn btn-primary mt-4" onClick={() => {navigate(-1);}}>Regresar</button>
                </article>
            </main>

        </>
    )
}

export default VideoRecipeView;
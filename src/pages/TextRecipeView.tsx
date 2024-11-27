import { useLocation, useNavigate } from "react-router-dom";
import NavMenu from "../components/navMenu";

function TextRecipeView (){
    const location = useLocation();
    const navigate = useNavigate()
    const { 
        titulo = "Sin titulo",
        ingredientes = ["null"],
        elaboracion = ["null"],
        imagen = "null",
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
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <img src={imagen} alt={titulo} className="img-fluid rounded mb-4 shadow-sm" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <section className="bg-light p-4 rounded shadow-sm mb-4">
                                <h2 className="mb-4 text-primary text-center">Ingredientes</h2>
                                <ul className="list-group">
                                    {ingredientes.map((ingrediente: string, index: number) => (
                                        <li
                                            key={index}
                                            className="list-group-item d-flex"
                                            style={{ backgroundColor: "#f9f9f9" }}
                                        >
                                            {ingrediente}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="bg-light p-4 rounded shadow-sm mb-4">
                                <h2 className="mb-3">Elaboración</h2>
                                <ol className="list-group">
                                    {elaboracion.map((step: string, index: number) => (
                                        <li key={index} className="list-group-item d-flex align-items-start" style={{ backgroundColor: "#f9f9f9" }}>
                                            <span className="badge bg-primary rounded-pill me-3">{index + 1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </section>
                            <button type="button" className="btn btn-primary" onClick={() => {navigate(-1);}}>Regresar</button>
                        </div>
                    </div>
                </article>
            </main>

        </>
    )
}

export default TextRecipeView;
import NavMenu from "../components/navMenu";

function NewRecipe () {
    return (
        <>
            <header>
                <NavMenu/>
            </header>

            <main>
                <h1>Nueva receta</h1>

                <form className="card">
                    <div className="mb-3">
                        <h2>Nombre de la Receta</h2>
                        <label htmlFor="txt-title" className="form-label">Titulo de la receta: </label>
                        <input type="text" name="txt-title" id="txt-title" className="form-control mb-3"/>
                    </div>
                    <div className="mb-3">
                        <h2>Ingredientes</h2>
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                        <label htmlFor="txt-item" className="form-label">Ingrediente: </label>
                        <input type="text" name="txt-item" id="txt-item" className="form-control mb-3"/>
                        <button type="button" className="btn btn-secondary">Añair ingrediente<span className="bi bi-plus"></span></button>
                    </div>
                    <div className="mb-3">
                        <h2>Elaboracion</h2>
                        <label htmlFor="txt-recipe" className="form-label">Ingresa los pasos para elaborar tu receta: </label>
                        <textarea name="txt-recipe" className="form-control" id="txt-recipe"></textarea>
                    </div>
                    <button type="button" className="btn btn-danger m-2">Descartar</button>
                    <button type="submit" className="btn btn-primary m-2">Enviar a revisión</button>
                </form>

            </main>

            <footer>

            </footer>
        </>
    )
}

export default NewRecipe;
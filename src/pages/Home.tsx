import { Link } from "react-router-dom";
import NavMenu from "../components/navMenu";

function Home () {
    return (
        <>
            <header lang="es">
                <NavMenu/>
            </header>

            <main lang="es">
            <section className="text-center bg-primary text-white py-5">
                <div className="container">
                <h1 className="display-4">Descubre Recetas Deliciosas</h1>
                <p className="lead">Encuentra inspiración para cada comida con nuestras recetas seleccionadas.</p>
                <Link to={'/text-recipe'} className="btn btn-light btn-lg">Explorar Recetas</Link>
                </div>
            </section>

            
            <section id="about" className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Acerca de Nosotros</h2>
                <p>En **Delicias al Plato**, nos apasiona compartir la alegría de cocinar. Desde recetas tradicionales hasta platillos innovadores, queremos inspirarte a crear momentos inolvidables en la mesa.</p>
                <h3 className="mt-4">Nuestra Filosofía</h3>
                <p>Cocinar es más que preparar alimentos; es una forma de arte que une a las personas. Nuestro objetivo es empoderarte con recetas claras, prácticas y sabrosas para que disfrutes del proceso tanto como del resultado.</p>
                <h4 className="mt-3">¿Por qué Elegirnos?</h4>
                <p>Contamos con una comunidad de amantes de la cocina que comparten sus recetas favoritas y consejos prácticos. Además, nuestras recetas están categorizadas para facilitar tu búsqueda y garantizar que encuentres justo lo que necesitas.</p>
                <p>Para explorar más sobre nosotros, visita nuestro <a href="#contact" className="text-primary">formulario de contacto</a> o síguenos en <a href="https://instagram.com" target="_blank" className="text-primary">nuestras redes sociales</a>.</p>
            </div>
            </section>

            
            <section id="recipes" className="py-5 bg-light">
                <div className="container">
                <h2 className="text-center mb-4">Nuestras Recetas</h2>
                <img src="https://th.bing.com/th/id/OIP.wP8_enH0VFC5jPZw8PQvXQHaDo?rs=1&pid=ImgDetMain" alt="sitio web de recetas" className="img-fluid mb-4"/>
                <div className="table-responsive">
                    <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                        <th>#</th>
                        <th>Receta</th>
                        <th>Categoría</th>
                        <th>Tiempo de Preparación</th>
                        <th>Calorías</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Spaghetti a la Boloñesa</td>
                        <td>Italiana</td>
                        <td>30 min</td>
                        <td>450 kcal</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Ensalada César</td>
                        <td>Saludable</td>
                        <td>15 min</td>
                        <td>200 kcal</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Tacos al Pastor</td>
                        <td>Mexicana</td>
                        <td>25 min</td>
                        <td>350 kcal</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Brownies de Chocolate</td>
                        <td>Postres</td>
                        <td>40 min</td>
                        <td>500 kcal</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </section>

            
            <section id="contact" className="py-5">
                <div className="container">
                <h2 className="text-center mb-4">Contáctanos</h2>
                <p className="text-center">¿Tienes preguntas o sugerencias? Escríbenos y estaremos encantados de ayudarte.</p>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Tu nombre"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="message" rows={4} placeholder="Escribe tu mensaje aquí"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            </main>

        </>
    )
}

export default Home;
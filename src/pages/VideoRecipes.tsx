import NavMenu from "../components/navMenu";
import CardListVideo from "../components/videoRecipeList";

function VideoRecipe () {
    const recipes = [
        {
            titulo: "Spaghetti a la carbonara",
            link: "",
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Enchiladas verdes",
            link: "",
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Pollo al ajillo",
            link: "",
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Chilaquiles rojos",
            link: "",
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Arroz frito con verduras",
            link: "",
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        }];


    return (
        <>
            <header>
                <NavMenu/>
            </header>

            <main>
                <h1 className="mb-4 mt-5">Recetas en video</h1>
                <CardListVideo data={recipes}/>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default VideoRecipe;
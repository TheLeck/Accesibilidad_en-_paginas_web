import NavMenu from "../components/navMenu";
import CardListText from "../components/textRecipeList";

function TextRecipe () {
    const recipes = [
        {
            titulo: "Spaghetti a la carbonara",
            ingredientes: ["400 g de spaghetti", "200 g de panceta o tocino, en cubos", "3 yemas de huevo", "1 huevo entero", "100 g de queso parmesano rallado", "Sal y pimienta al gusto", "2 cucharadas de aceite de oliva"],
            elaboracion: ["Cocina el spaghetti en agua con sal hasta que esté al dente. Reserva un poco del agua de cocción.",
                 "En un sartén, calienta el aceite y cocina la panceta hasta que esté dorada.",
                 "Mezcla las yemas, el huevo entero y el queso parmesano en un bol. Agrega pimienta.", 
                 "Escurre la pasta y mezcla rápidamente con la panceta caliente y la mezcla de huevo para que se forme una salsa cremosa. Si es necesario, añade un poco de agua de cocción para ajustar la textura."],
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Enchiladas verdes",
            ingredientes: ["12 tortillas de maíz", "500 g de tomatillo", "2 chiles serranos", "1 diente de ajo", "½ cebolla", "1 taza de crema", "1 taza de queso fresco desmoronado", "Pollo deshebrado (opcional)", "Aceite para freír"],
            elaboracion: ["Cocina los tomatillos, los chiles, el ajo y la cebolla hasta que estén suaves. Licúa hasta obtener una salsa.", 
                "Calienta un poco de aceite en un sartén y sofríe la salsa por 5 minutos. Ajusta de sal.", 
                "Fríe ligeramente las tortillas y sumérgelas en la salsa.", 
                "Rellénalas con pollo deshebrado, enrolla y sirve con crema, queso fresco y más salsa."],
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Pollo al ajillo",
            ingredientes: ["4 muslos de pollo", "4 dientes de ajo, en láminas", "1/2 taza de vino blanco", "1/4 taza de aceite de oliva", "Sal y pimienta"],
            elaboracion: ["Salpimienta el pollo y dóralo en aceite caliente.", 
                "Retira el pollo y sofríe el ajo hasta que esté dorado.", 
                "Añade el vino blanco y regresa el pollo al sartén.", 
                "Cocina a fuego lento por 25 minutos o hasta que el pollo esté bien cocido."],
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Chilaquiles rojos",
            ingredientes: ["10 tortillas cortadas en triángulos", "500 g de jitomates", "2 chiles guajillo (sin semillas)", "1 diente de ajo", "½ cebolla", "Aceite para freír", "Crema y queso fresco para servir"],
            elaboracion: ["Fríe los triángulos de tortilla hasta que estén crujientes y reserva.", 
                "Cocina los jitomates, chiles, ajo y cebolla. Licúa y sofríe la salsa en un sartén. Ajusta de sal.", 
                "Vierte la salsa sobre las tortillas fritas y mezcla rápidamente.", 
                "Sirve con crema, queso fresco y, si deseas, huevo o pollo."],
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        },
        {
            titulo: "Arroz frito con verduras",
            ingredientes: ["2 tazas de arroz cocido", "1 zanahoria, en cubos", "1/2 taza de chícharos", "2 huevos", "2 cucharadas de salsa de soya", "2 cucharadas de aceite"],
            elaboracion: ["En un sartén, calienta aceite y saltea las verduras hasta que estén suaves.", 
                "Añade el arroz cocido y mezcla.", 
                "Haz un espacio en el centro del sartén y cocina los huevos revueltos.", 
                "Agrega la salsa de soya y mezcla bien."],
            imagen: "https://media.metrolatam.com/2018/05/16/enchiladasverdes1-f39a835231e79aa57387ca85bf07485d-1200x800.jpg",
            autor: "Jose Arturo Mendoza Barajas"
        }]

    return (
        <>
            <header>
                <NavMenu/>
            </header>

            <main>
                <h1 className="mb-4 mt-5">Recetas en texto</h1>
                <CardListText data={recipes}/>
            </main>

            <footer>

            </footer>
        </>
    )
}

export default TextRecipe;
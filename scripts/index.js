import http from "node:http";
import	{inicio, datos, notFound} from "./library.js";

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    if (method === "GET") {
        switch (url) {
            case '/':
                //manejar la ruta de inicio
                inicio(req, res);
                break;

            case '/datos':
                //manejar la ruta de datos
                datos(req, res);
                break;

            default:
                //pagina no encontrada
                notFound(req, res);
                break;
        }
    }
})

server.listen(3000, () => console.log("Server escuchando en puerto 3000"));
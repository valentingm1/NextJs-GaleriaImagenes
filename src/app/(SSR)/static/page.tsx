import { UnsplashImage } from "@/models/unsplashed-img";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Imágenes Estáticas - Next 13.4 | Galería de Imágenes ",
  }


export default async function Page() {
    const res = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const image: UnsplashImage = await res.json();

    const width = Math.min(500, image.width)
    const height = (width / image.width) * image.height

    return(
        <div className="d-flex flex-column align-items-center">
            <Alert>
            Esta página <strong>trae datos desde una API y almacena en caché los datos al compilar.</strong> Aunque la API de Unsplash siempre devuelve una nueva imagen, vemos la misma imagen después de actualizar la página hasta que compilamos el proyecto nuevamente.
            </Alert>

            <Image
            src={image.urls.raw}
             width={width}
             height={height}
             alt={image.description ? image.description : "El autor de la imagen no eligió ninguna descripción"}

             className="rounded shadow mw-100 h-100"
            />
            <p>Por <Link href={`/users/${image.user.username}`}>{image.user.username}</Link></p>
        </div>
    )
}
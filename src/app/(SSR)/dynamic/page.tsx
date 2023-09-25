import { UnsplashImage } from "@/models/unsplash-img";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imágenes Dinámicas - Next 13.4 | Galería de Imágenes",
};

//  export const revalidate = 0;

export default async function Page() {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      cache: "no-cache", // "no-store"
    }
  );
  const image: UnsplashImage = await res.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Esta página <strong><a href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering" target="blank" className="anchor">trae datos de la API de manera dinámica.</a></strong>{" "}
        Cada vez que refresques la página, la imagen va a cambiar.
      </Alert>

      <a href={image.urls.raw} target="_blank">
        <Image
          src={image.urls.raw}
          width={width}
          height={height}
          alt={
            image.description
              ? image.description
              : "El autor de la imagen no eligió ninguna descripción"
          }
          className="rounded shadow mw-100 h-100"
        />
      </a>
      <p>
        Por{" "}
        <Link href={`/users/${image.user.username}`}>
          {image.user.username}
        </Link>
      </p>
    </div>
  );
}

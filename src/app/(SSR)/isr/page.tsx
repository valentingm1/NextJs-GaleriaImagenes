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
      // cache: "no-cache" // "no-store"
      next: { revalidate: 10 },
    }
  );
  const image: UnsplashImage = await res.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Esta página utiliza{" "}
        <strong>
          <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data" target="_blank" className="anchor">Incremental Static Regenetarion(ISR).</a>
        </strong>{" "}
        Una nueva imagen es generada cada 15 segundos después de refrescar la
        página, y luego es traída desde el caché durante esa duración.
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

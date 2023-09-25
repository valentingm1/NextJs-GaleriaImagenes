import { UnsplashImage } from "@/models/unsplash-img";
import Image from "next/image";
import styles from "./topic.module.css";
import { Alert } from "@/components/bootstrap";
import { Metadata } from "next";

interface PageProps {
  params: { topic: string };
  /* searchParams:{ [key: string]: string | string[] | undefined} */
}

// export const dynamicParams = false // Hace que no se puedan buscar otros topics, solamente los que quedaron precargados abajo en StaticParams

export function generateMetadata({ params: { topic } }: PageProps): Metadata {
  return {
    title: topic + " - Next 13.4 | Galería de Imágenes",
  };
}

export function generateStaticParams() {
  return ["cats", "food", "sports"].map((topic) => ({ topic })); //Quedan esos 3 "topics" precargados
}

export default async function Page({ params: { topic } }: PageProps) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=25&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await res.json();

  return (
    <div>
      <Alert>
        Esta página usa{" "}
        <strong>
          <a
            href="https://nextjs.org/docs/app/api-reference/functions/generate-static-params"
            target="_blank"
            className={styles.anchor}
          >
            generateStaticParams
          </a>
        </strong>{" "}
        para renderizar y almacenar en caché páginas estáticas al momento de
        compilar, sin importar que la URL tenga un parámetro dinámico. Las
        páginas que no estén incluídas en generateStaticParams son
        traidas(fetch) y renderizadas la primera vez que entramos a la página, y
        luego son cacheadas para usarse en futuras peticiones(Esto se puede
        deshabilitar).
        Podemos cambiar la última palabra de la URL para cambiar el tópico de las fotos, por ejemplo topics/mountains, lo que mostraría fotos de montañas.
      </Alert>
      <h1 className={styles.title}>{topic}</h1>
      {images.map((image) => (
        <a href={image.urls.raw}  key={image.urls.raw} target="_blank">
          <Image
            src={image.urls.raw}
            width={250}
            height={250}
            alt={
              image.description
                ? image.description
                : "El autor no proporcionó una descripción de la imagen."
            }
            className={styles.image}
          />
        </a>
      ))}
    </div>
  );
}

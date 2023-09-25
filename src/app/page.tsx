import { Alert } from "@/components/bootstrap";
import styles from "./page.module.css"

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <Alert>
        <p>
          Este es un proyecto de muestra para aprender sobre las nuevas
          características de <strong>NextJS 13</strong>, que incluyen:
        </p>
        <ul>
          <li><a href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" target="blank" className={styles.anchor}>Static and dynamic server-side rendering</a></li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data" target="blank" className={styles.anchor}>Incremental static regeneration</a></li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/rendering/client-components" target="blank" className={styles.anchor}>Client-side rendering</a></li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers" target="blank" className={styles.anchor}>Route handlers (API endpoints)</a></li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata" target="blank" className={styles.anchor}>Meta-data API</a></li>
        </ul>
        <p className="mb-0">
          Cada página usa un enfoque distinto para{" "}
          <strong>traer y cachear datos</strong>. Dale clic a los links en la
          barra de navegación para probarlos.
        </p>
      </Alert>
      <Alert variant="secondary">
        <p className="mb-0">
          Unsplash tiene una cuota gratuita de 50 peticiones por hora, así que
          podés empezar a recibir errores si intentás demasiado seguido.
        </p>
      </Alert>
    </div>
  );
}

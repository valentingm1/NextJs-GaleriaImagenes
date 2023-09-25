import { Alert } from "@/components/bootstrap";

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
          <li><a href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" target="blank"></a>Static and dynamic server-side rendering</li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data" target="blank"></a>Incremental static regeneration</li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/rendering/client-components" target="blank"></a>Client-side rendering</li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers" target="blank"></a>Route handlers (API endpoints)</li>
          <li><a href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata" target="blank"></a>Meta-data API</li>
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

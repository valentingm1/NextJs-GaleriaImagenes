"use client";

import { UnsplashImage } from "@/models/unsplash-img";
import { FormEvent, useState } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import Image from "next/image";
import styles from "./search.module.css"

function SearchPage() {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);

        const res = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await res.json();
        setSearchResults(images);
      } catch (error) {
        console.log(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
    }

  return (
    <div>

        <Alert>
            Esta página trae los datos <strong><a href="https://nextjs.org/docs/app/building-your-application/rendering/client-components" target="_blank">desde el lado del cliente.</a></strong> Para no filtrar las credenciales de la API, la petición se manda hacia un <strong><a href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers" target="_blank">Route Handler</a></strong> que corre del lado del servidor. Este se encarga de traer la información de la API de Unsplash y luego la pasa hacia el cliente. 
        </Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control name="query" placeholder="E.g. Cats, Food, ..." />
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
          Search
        </Button>
      </Form>

      <div className="d-flex flex-column align-items-center">
        {searchResultsLoading && <Spinner animation="border" />}
        {searchResultsLoadingIsError && (
          <p>Algo salió mal :/ Por favor intentalo de nuevo.</p>
        )}
        {searchResults?.length === 0 && (
          <p>
            No se encontró nada. Probá con una palabra diferente. De preferencia
            una palabra en inglés!
          </p>
        )}
      </div>

      {searchResults && (
        <>
          {searchResults.map((image) => (
            <a href={image.urls.raw} target="_blank">
              <Image
                src={image.urls.raw}
                width={250}
                height={250}
                alt={
                  image.description
                    ? image.description
                    : "El autor no proporcionó una descripción de la imagen."
                }
                key={image.urls.raw}
                className={styles.image}
              />
            </a>
          ))}
        </>
      )}
    </div>
  );
}

export default SearchPage;

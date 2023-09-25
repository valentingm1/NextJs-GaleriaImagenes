import { UnsplashUser } from "@/models/unsplash-user"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Alert } from "@/components/bootstrap"


interface PageProps {
    params: { username: string },
    /* searchParams:{ [key: string]: string | string[] | undefined} */
}


async function getUser(username: string): Promise<UnsplashUser>{
    const res = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    
    if(res.status === 404) notFound();

    return await res.json();

}



export async function generateMetadata({params:{username}}: PageProps): Promise<Metadata> {
    const user = await getUser(username) 
    
    return {
        title: [user.first_name, user.last_name].filter(Boolean).join("") || user.username + " - Next 13.4 | Galería de Imágenes"
    }
}


export default async function Page({params: {username}}: PageProps){

    const user = await getUser(username) 

    return (
        <div>
            <Alert>
            Esta página de perfil utiliza <strong><a href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function">generateMetadata</a></strong> para cambiar el título de la página de manera dinámica, según la respuesta de la API.
            </Alert>
            <h1>
                {user.username}
            </h1>
            <p>Nombre: {user.first_name}</p>
            <p>Apellido: {user.last_name}</p>
            <a href={"https://unsplash.com/" + user.username}>Perfil de Unsplash</a>
        </div>
    )

}
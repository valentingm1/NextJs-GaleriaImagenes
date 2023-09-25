import { Metadata } from "next"
import SearchPage from "./SearchPage"

export const metadata: Metadata = {
    title: "Search - Next 13.4 | Galería de Imágenes"
}

export default function Page(){
    return <SearchPage/>
}
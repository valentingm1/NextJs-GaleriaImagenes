import { UnsplashSearchResponse } from "@/models/unsplash-img";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query");

    if(!query){
        return NextResponse.json({error: "No query provided"}, {status: 400})
    }

    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    const {results}: UnsplashSearchResponse = await res.json();

    return NextResponse.json(results)
}
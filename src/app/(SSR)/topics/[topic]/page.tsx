interface PageProps {
    params: { topic: string},
    /* searchParams:{ [key: string]: string | string[] | undefined} */
}


export default async function Page({params: {topic}}: PageProps){

    

    return(
        <div>
            {topic}
        </div>
    )
}
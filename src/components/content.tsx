'use client'

import { useState } from "react"

export function Content() {
    const [likes, setLikes] = useState(0)

    return (
        <>
            <Header title="🚀 Learning at speed" />
            <div className="text-subtle">Let's get back to the basics</div>

            <button onClick={() => setLikes(likes+1)}>Like {likes}</button>
        </>
    )
}



function Header({ title }: { title?: string}) {
    if (!title)
        return <h1>Default Title</h1>

    return <h1>{title}</h1>
}
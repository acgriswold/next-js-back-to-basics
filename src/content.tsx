export function Content() {
    return (
        <>
            <Header title="🚀 Learning at speed" />
            <div className="text-subtle">Let's get back to the basics</div>
        </>
    )
}



function Header({ title }: { title?: string}) {
    if (!title)
        return <h1>Default Title</h1>

    return <h1>{title}</h1>
}
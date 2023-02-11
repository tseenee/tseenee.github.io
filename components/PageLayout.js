export default function PageLayout({id, children}){
    return (
        <div id={id} className="p-4 min-h-screen">{children}</div>
    )
}
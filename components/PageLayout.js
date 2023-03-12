import React from "react";

export default function PageLayout({id, className = "", style={}, children}){
    return (
        <div id={id} className={`p-4 min-h-screen max-w-[100vw] ${className}`} style={style}>{children}</div>
    )
}
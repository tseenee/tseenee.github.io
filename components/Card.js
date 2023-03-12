import React from "react";

export default function({ className = "", label, icon = <></>, value }){
    return (
        <div className={`bg-slate-900 rounded flex items-center py-4 px-8 ${className}`}>
            {icon}
            <div className={`${icon && 'ml-4'}`}>
                <h3 className="text-sm text-slate-500">{label}</h3>
                <div className="text-base text-slate-300">{value}</div>    
            </div>
        </div>
    );
}
import { useEffect, useState } from "react";
export default function({ duration = 1000, children }){
    const [ visible, setVisible ] = useState(false);
    const [ hide, setHide ] = useState(false);
    useEffect(() => {
        setTimeout(() => setVisible(true), duration);
        const onScroll = () => {
            setHide(true);
        }
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, []);
    if(visible)
        return (
            <div className="absolute bottom-3 ml-3 text-center font-thin" 
                style={{ 
                    animation: 'fadeIn 2s',
                    transition: 'all 0.5s ease-in',
                    opacity: hide ? '0' : '1' 
                }}>
                <svg className="inline-block w-5 fill-slate-600 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/></svg>
                <span className="text-slate-400 ml-3">
                    {children}
                </span>
            </div>
        );
}
import { useRouter } from 'next/router'

export default function(){
    const router = useRouter()
    const changeLocale = (e) => {
        router.push({
            route: router.pathname,
            query: router.query
        }, router.asPath, { locale: e.currentTarget.value });
    }
    return (
        <div>
            <select onChange={changeLocale} disabled={false} className="bg-slate-600 text-slate-200 px-4 py-2 rounded">
                <option value={'en'}>English</option>
                <option value={'ja'}>日本語</option>
                <option value={'mn'}>Монгол Хэл</option>
            </select>
        </div>
    )
}
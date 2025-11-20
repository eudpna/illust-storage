import { ReactChild } from "react"
import { A } from "./A"

export const Illust: React.FC<{
    filename: string
    filenameShort: string
    date: string
    name: string
}> = (props) => {
    const { filename, filenameShort, date, name } = props
    return <div>
        <A inSite href={'images/illusts/' + filenameShort}>{date+' '+name}</A>
    </div>
}
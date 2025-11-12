import { ReactChild } from "react"
import { A } from "./A"

export const Illust: React.FC<{
    filename: string
    date: string
    name: string
}> = (props) => {
    const { filename, date, name } = props
    return <div>
        <A href={'images/illusts/'+filename}>{date+' '+name}</A>
    </div>
}
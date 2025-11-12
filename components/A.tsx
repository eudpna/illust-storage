export const A: React.FC<{
    href: string
    inSite?: boolean
    className?: string
    style?: any
}> = (props) => {

    const className = props.className ? props.className : ""
    if (props.inSite) {
        return <a href={props.href} className={"text-blue-600 visited:text-purple-600" + className} style={props.style?props.style:{}} >{props.children}</a>
    }
    return <a href={props.href} className={"text-blue-600 visited:text-purple-600" + className} style={props.style ? props.style : {}} target="_blank">{props.children}</a>
}
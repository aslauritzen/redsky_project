interface Properties {
    children?: string | string[]
    onClick?: VoidFunction
    className?: string
    disabled?: boolean
}

export default function Button({ children='', onClick=()=>{}, className='', disabled=false }: Properties) {
    return <button disabled={disabled} className={`button ${className}`} onClick={onClick}>{children}</button>
}
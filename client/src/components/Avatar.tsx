interface Properties {
    alt: string,
    src: string
}

export default function Avatar({ alt, src }: Properties) {
    return <img className='avatar-circle' alt={alt} src={src} />
}
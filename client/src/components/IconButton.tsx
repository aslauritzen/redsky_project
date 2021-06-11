import '../sass/iconButton.scss';

interface Properties {
    icon: string,
    onClick?: VoidFunction,
    className?: string
}

export default function IconButton({ icon, onClick = () => { }, className = '' }: Properties) {
    return <button onClick={onClick} className='icon-button'><i className={`fa fa-${icon} ${className}`}></i></button>
}
import '../sass/toast.scss';

interface Properties {
    status: string
    message: string
}

export default function Toast({ status, message }: Properties) {
    return (
        <div className={`toast ${status}`}>
            <button>
                x
            </button>
            <div>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
}
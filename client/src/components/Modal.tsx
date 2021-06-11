import { functionalComponent } from "../util/types";

function defaultFooter() {
    return <button type='button'>Close</button>
}

interface Properties {
    openStatuses: {
        open: boolean,
        opened: boolean,
        markOpened: React.Dispatch<React.SetStateAction<boolean>>
    },
    modalTitle?: string,
    modalBody: functionalComponent,
    modalFooter?: functionalComponent
}

export default function Modal({ openStatuses, modalTitle = 'Modal', modalBody, modalFooter = defaultFooter }: Properties) {
    if (!openStatuses.open) {
        if (openStatuses.opened) {
            openStatuses.markOpened(false);
        }
        return null;
    }
    else if (openStatuses.open && !openStatuses.opened) {
        openStatuses.markOpened(true);
    }

    return (
        <div className='modal' >
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>
                        {modalTitle}
                    </h4>
                </div>
                <div className='modal-body'>
                    {modalBody()}
                </div>
                <div className='modal-footer'>
                    {modalFooter()}
                </div>
            </div>
        </div>
    );
}
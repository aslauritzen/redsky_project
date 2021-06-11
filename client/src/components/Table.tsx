// import React from 'react';
import '../sass/table.scss';
import { functionalComponent } from '../util/types';

const emptyFunctionalComponent = () => <></>;

interface Properties {
    headBuilder?: functionalComponent,
    bodyBuilder?: functionalComponent,
    footBuilder?: functionalComponent,
}

export default function Table({ headBuilder = emptyFunctionalComponent, bodyBuilder = emptyFunctionalComponent, footBuilder = emptyFunctionalComponent }: Properties) {
    return (
        <table className='user-list'>
            <thead className='user-header'>
                {headBuilder()}
            </thead>
            <tbody>
                {bodyBuilder()}
            </tbody>
            <tfoot>
                {footBuilder()}
            </tfoot>
        </table>
    )
}
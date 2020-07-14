import React, { Fragment } from 'react'

import Transactions from './Transactions'

export default () => {
    return (
        <Fragment>
            <h1 className="title">Pages</h1>


            <h2 className="title">Transactions page:</h2>
            <p className="text">
                This page contains tabs with past and scheduled (future) transactions
                has multiple filters and sortable table of transactions
            </p>

            <Transactions />

        </Fragment>
    )
}
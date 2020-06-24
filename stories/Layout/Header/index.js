import React, { Fragment } from 'react'

import Header from './default'

export default () => {
    return (
        <Fragment>
            <h1 className="title">Header</h1>

            <p className="text">
                Application main header
            </p>

            <p className="text">
                Contains:
                <ul>
                    <li>Organization balance</li>
                    <li>Add funds button</li>
                    <li>Search button</li>
                    <li>Profile badge and name</li>
                    <li>Profile menu</li>
                    <li>Notifications</li>
                </ul>
            </p>

            <h2 className="title">Examples:</h2>

            <Header />

        </Fragment>
    )
}
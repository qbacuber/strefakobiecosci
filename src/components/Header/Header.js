import React from 'react'
import ActiveLink from './ActiveLink'

import {IMG, Lista} from '../styles/style'

export default function Header() {
    return (
        <>  
            <IMG/>
            <Lista>
                <ActiveLink acive={true} to="/" label="STRONA GŁOWNA" />          
                <ActiveLink to="/cennik" label="CENNIK" />
                <ActiveLink to="/kontakt" label="KONTAKT" />
            </Lista>
        </>
    )
}

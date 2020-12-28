import React from 'react'
import { useRouteMatch } from "react-router-dom"
import {Opcja, Link} from '../styles/style'


export default function ActiveLink({label, to, acive}){
    let match = useRouteMatch({
        path: to, 
        exact: acive
    })

    return(
        <Opcja className={match ? "active-link" : ""}>
            <Link to={to} > {label} </Link> 
        </Opcja>
    )
}

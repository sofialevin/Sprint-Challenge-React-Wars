import React from "react";

import { Pagination } from 'semantic-ui-react'

const PaginationButtons = (props) => {
    const loadPage = () => {
        props.setRequestURL(`https://swapi.co/api/people/?page=3`)
    }
    return (
        <Pagination defaultActivePage={1} totalPages={props.noPages} onClick={loadPage}/>
    )
} 

export default PaginationButtons
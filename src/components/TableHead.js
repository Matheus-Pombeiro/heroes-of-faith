import React from "react";

const TableHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Heros of Faith Table</th>
        </tr>
        <tr>
            <th>Name
                <div className="container-arrows">
                    <div onClick={ () => props.sortCrescent() }>&#8593;</div>
                    <div onClick={ () => props.sortDecrescent() }>&#8595;</div>
                </div>
            </th>
            <th>Book</th>
            <th>Testament</th>
        </tr>
    </thead>
);

export default TableHead;
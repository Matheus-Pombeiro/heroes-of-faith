import React from "react";

const TableFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Number of Heroes in the table: { props.nbrHeroes }</td>
        </tr>
    </tfoot>
);

export default TableFoot;
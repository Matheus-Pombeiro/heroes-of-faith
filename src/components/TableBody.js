import React from "react";

const TableBody = props => (
    <tbody>
        { props.heroes.map( (heroe, index ) => (
            <tr key={ heroe.id }>
                <td>{ heroe.name }</td>
                <td>{ heroe.book }</td>
                <td>{ heroe.testament }</td>
                <td>
                    <button className="botao remover">Remove</button>
                </td>
            </tr>
        ))}
    </tbody>
);

export default TableBody;
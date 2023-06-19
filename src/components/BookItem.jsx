import React from 'react';

const BookItem = ( {item, onDel, onEdit} ) => {
    const {id, title, author, bookcode} = item;

    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td>
                <button onClick={() => onEdit(item)}>✎</button>
                <button onClick={() => onDel(id)}>X</button>
            </td>
        </tr>
    );
};

export default BookItem;
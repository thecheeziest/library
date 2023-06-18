import React from 'react';

const BookItem = ( {item, onDel} ) => {
    const {id, title, author, bookcode} = item;

    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{bookcode}</td>
            <td><button className='delete' onClick={() => onDel(id)}>X</button></td>
        </tr>
    );
};

export default BookItem;
import React from 'react';

const BookInput = ( {changeInput, book, onSubmit, textRef} ) => {
    const {title, author, bookcode} = book;

    return (
        <div className="book-input">
            <form className="book-form" onSubmit={onSubmit}>
                <p>
                    <label>장르</label>
                    <input type="text" name='title' value={title} onChange={changeInput} ref={textRef} placeholder='장르 입력 (ex. 소설)' />
                </p>
                <p>
                    <label>저자</label>
                    <input type="text" name='author' value={author} onChange={changeInput} placeholder='저자 입력 (ex. 이지은)' />
                </p>
                <p>
                    <label>책 코드</label>
                    <input type="text" name='bookcode' value={bookcode} onChange={changeInput} placeholder='책 코드 입력 (ex. 00001)' />
                </p>
                <p><button className='btn' type='submit'>추가</button></p>
            </form>
        </div>
    );
};

export default BookInput;
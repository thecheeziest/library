import React, { useRef, useState } from 'react';
import './library.scss';
import BookInput from './BookInput';
import BookList from './BookList';
import BookMsg from './BookMsg';


const Library = () => {
    const [listData, setListData] = useState([]);
    const [book, setBook] = useState({
        title: '', author: '', bookcode: ''
    });
    const no = useRef(1);
    const textRef = useRef('');
    const [msg, setMsg] = useState('북 리스트 메시지');
    const [isMsg, setIsMsg] = useState(false);
    const [onoff, setOnoff] = useState('');
    
    const changeInput = e => {
        const {name, value} = e.target;
        setBook({
            ...book,
            [name] : value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if ( !book.title || !book.author || !Number(book.bookcode) ) return;

        book.id = no.current++;
        setListData([
            ...listData,
            book
        ]);
        setBook({
            title: '', author: '', bookcode: ''
        })
        textRef.current.focus();

        setMsg('서적이 추가되었습니다.')
        setIsMsg(true);
        setOnoff('on')
    }

    const onDel = id => {
        setListData(listData.filter(item => item.id !== id))

        setMsg('서적이 삭제되었습니다.')
        setIsMsg(true);
        setOnoff('off')
    }

    return (
        <div className='wrap'>
            <section id='content' className='main-book'>
                <h2>BOOK-CAFE ! 도서 관리 시스템</h2>
                <div className="inner">
                    <BookInput changeInput={changeInput} book={book} onSubmit={onSubmit} textRef={textRef} />
                    <BookList listData={listData} onDel={onDel} />
                </div>
                <BookMsg msg={msg} isMsg={isMsg} setIsMsg={setIsMsg} onoff={onoff} />
            </section>
        </div>
    );
};

export default Library;
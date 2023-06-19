import React, { useEffect, useRef, useState } from 'react';
import './library.scss';
import BookInput from './BookInput';
import BookList from './BookList';
import BookMsg from './BookMsg';


const Library = () => {
    const [listData, setListData] = useState([]);
    // const [book, setBook] = useState({ title: '', author: '', bookcode: '' });

    const [current, setCurrent] = useState({});
    const [book, setBook] = useState(current);
    // const {title, author, bookcode} = book;

    const no = useRef(1);
    const textRef = useRef('');

    const [msg, setMsg] = useState('북 리스트 메시지');
    const [isMsg, setIsMsg] = useState(false);
    const [onoff, setOnoff] = useState('');
    const [add, setAdd] = useState('등록');
    
    const changeInput = e => { // 인풋 값을 book에 저장
        const {name, value} = e.target;
        setBook({
            ...book,
            [name] : value
        })
    }

    // current가 변경될 때마다 - book 값이 변경될 때마다 자동으로 setBook (book에 저장)
    useEffect( () => {
        setBook(current);
    }, [current]);

    const onSubmit = e => { // 등록 or 수정 버튼 누르면
        e.preventDefault();
        
        if ( !book.title || !book.author || !Number(book.bookcode) ) return;

        if (e.target.name === '수정') {
            // if (!name || !addr) return
            onUpdate(book)
            setAdd('등록');
            
        } else {
            book.id = no.current++;
            setListData([ // 북 데이터에 인풋 값에 저장된 book 값 추가
                ...listData,
                book
            ]);
            
            setMsg('서적이 추가되었습니다.')
            setIsMsg(true);
            setOnoff('on')
        }
        setBook({ // 인풋 부분 '' 공백 처리
            title: '', author: '', bookcode: ''
        })
        textRef.current.focus(); // 포커스
    }

    const onDel = id => { // 삭제 버튼 누르면
        setListData(listData.filter(item => item.id !== id));
        setMsg('서적이 삭제되었습니다.');
        setIsMsg(true);
        setOnoff('off');
    }

    const onEdit = book => { // 수정 버튼 누르면
        setCurrent(book); // current 값 - book input 값으로 업데이트
        setAdd('수정');
    }

    const onUpdate = book => {
        setListData(listData.map(item => item.id === book.id ? book : item));
        // id가 같으면 item 값 book으로
        setIsMsg(true);
        setMsg('서적이 수정되었습니다.');
    }

    return (
        <div className='wrap'>
            <section id='content' className='main-book'>
                <h2>BOOK-CAFE ! 도서 관리 시스템</h2>
                <div className="inner">
                    <BookInput changeInput={changeInput} book={book} onSubmit={onSubmit} textRef={textRef} onUpdate={onUpdate} current={current} add={add} />
                    <BookList listData={listData} onDel={onDel} onEdit={onEdit} />
                </div>
                <BookMsg msg={msg} isMsg={isMsg} setIsMsg={setIsMsg} onoff={onoff} />
            </section>
        </div>
    );
};

export default Library;
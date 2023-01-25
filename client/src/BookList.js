import React from 'react';

function BookList({ list }){

    const bookDisplay = list.map((book) =>{
        return (
        <div id= "display">
            <img src={book.image} alt="book pics" />
        </div>
        )
    });

    return(
        <div>
            {bookDisplay}
        </div>
    )

}




export default BookList;
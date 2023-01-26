import React from 'react';



function BookList({ list }){

    const bookDisplay = list.map((book) =>{
        return <li key={book.id} >
                <div className="book-images">
                    <img src={book.image} alt="book-images"></img>
                </div>

                </li>

        //     <div key={book.id} className= "display">
        //     <div id="book-images">
        //     <img src={book.image} alt="Book images"/>
        //     </div>
        // </div>
        
        
    });

    return(
        <div>
            {bookDisplay} 
        </div>
    )

}




export default BookList;
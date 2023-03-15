import React from 'react';



function BookList({ list }){

    const bookDisplay = list.map((book) =>{
        return (
            <div id="test">
        <div className="book-card" key={book.id} >
                    <div className="book-images">
                        <img className="images" src={book.image} alt="book images"></img>
                    </div>
                <div className="book-info">
                        <p>
                        Title: {book.title}
                        </p>
                        
                        <p>
                        Author: {book.author}
                        </p>
                        
                        <p>
                        Description: {book.description}
                        </p>
                        
                        <p>
                            Price: ${book.price}
                        </p>
                        
                    </div>
                    
                    <button>Check it out</button>
                </div>
                </div>
        )

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
import React, { Component } from 'react';
import Book from '../Components/book';

class AllBooks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [ ]
        }
    }

    render() {
        return(
            <>
            <h1 style={{textAlign:'center',color:'#8C6630', fontFamily: 'Open Sans',}}>ALL BOOKS</h1>
            <div className="books">
                <Book></Book>
            </div>
            </>
        )
    }
}

export default AllBooks;
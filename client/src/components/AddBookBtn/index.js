import React from "react";
import Button from "../Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
// import { Container, Row, Col } from "../Grid";

class AddBookBtn extends React.Component {

  postToDB = (book) => {
    var dbBook = {
      title: book.title,
      authors: book.authors,
      synopsis: book.synopsis,
      thumbnail: book.thumbnail,
      link: book.link
    }

    axios.post("/api/books", dbBook)
      .then(() => toast.success(`You added ${book.title} to your bookshelf`))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        
              <Button  onClick={() => { this.postToDB(this.props) }
              }>
                Save Me
        </Button>
            
      </div>
    );
  }
}

export default AddBookBtn;
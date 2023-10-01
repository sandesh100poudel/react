import BookShow from "./BookShow";

function BookList({books,onDelete,onEdit}){

    const renderList = books.map((book)=>{
        return( <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>)
    })
    return(
        <div>{renderList}</div>
    )
}
export default BookList;
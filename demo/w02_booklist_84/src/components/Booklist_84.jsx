import Book_84 from "./Book_84"
import books_data from "./data/booklist_data"

console.log('books_data', books_data);

const Booklist_84 = () => {
  return (
  <section className='booklist'>
    {books_data.map((book) => {
    const {id, img, title, author } = book
    return <Book_84 key={id} img={img} title={title} author={author} />
})}
</section>
  )
}

export default Booklist_84

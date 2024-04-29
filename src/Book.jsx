import React from 'react'

const Book = () => {
  return (
    <div className='book'>
        <Title/>
        <Image/>
        <Author/>
        <Price/>
    </div>
    
  )
}

const Title = () => <h1>The Power of Your Subconscious Mind</h1>;

const Price = () =>{
    return <h2>Rs.149</h2>;
}
const Image = () =>{
    return <img src="https://m.media-amazon.com/images/I/61jBLw5Bq9L._SY425_.jpg"/>;
}

function Author(){
    return <h3>Joseph Murphy</h3>;
}
export default Book;

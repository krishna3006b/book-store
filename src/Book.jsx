const Book=(props)=>{
  return (
  <div className="book">
      <h2>{props.title}</h2>
      <img src={props.imgLink}/>
      <h2>{props.author}</h2>
      <h3>{props.price}</h3>
     
  </div>
  );
};
export default Book;
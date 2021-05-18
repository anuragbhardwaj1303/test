import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function Books() {
  return (
    <section className='books'>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}
const Book = () => {
  return (
    <article className='book'>
      <CoverImage></CoverImage>
      <Title></Title>
      <Author></Author>
      <Rating></Rating>
      <Audible></Audible>
    </article>
  );
};
const CoverImage = () => (
  <a
    href='https://www.amazon.in/Think-and-Grow-Rich/dp/B07BN7GBW2/ref=zg_bs_21881799031_9?_encoding=UTF8&psc=1&refRID=094MGZ2S1HTBXSZVSM9P'
    target='_blank'
    rel='noreferrer'>
    <img
      width='200px'
      src='https://m.media-amazon.com/images/I/51vKha04DuL.jpg'
      alt='Think and Grow Rich'
      className='image-book'></img>
  </a>
);
const Title = () => {
  return (
    <a
      href='https://www.amazon.in/Think-and-Grow-Rich/dp/B07BN7GBW2/ref=zg_bs_21881799031_9?_encoding=UTF8&psc=1&refRID=094MGZ2S1HTBXSZVSM9P'
      target='_blank'
      rel='noreferrer'
      className='title'>
      <h3>Think and Grow Rich</h3>
    </a>
  );
};
const Author = () => {
  return <h5 >Napoleon Hill</h5>;
};

const Rating = () => {
  return (
    <p>
      ⭐⭐⭐⭐⭐ <span className='review'>47,514</span>
    </p>
  );
};
const Audible = () => {
  return <p classname='audible'>Audible Audiobook</p>;
};

ReactDom.render(<Books />, document.getElementById("root"));

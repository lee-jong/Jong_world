import React from 'react';

const printList = (imgList, deletedImage) => {
  let items = imgList.map(item => (
    <div className="card card-pin" key={item.seq}>
      <img
        id={item.seq}
        className="card-img"
        src={`http://localhost:4000/static/${item.img}`}
        alt="Card image"
      />
      <div className="overlay">
        <button
          type="button"
          className="close"
          style={{ width: 5, height: 5, marginRight: 10 }}
          aria-label="Close"
          onClick={() => deletedImage(item.seq)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h2 className="card-title title" style={{ fontSize: 14 }}>
          {item.title}
        </h2>
        <h2 className="card-title title" style={{ fontSize: 14 }}>
          {item.sub_title}
        </h2>
        <h2 className="card-title title" style={{ fontSize: 14 }}>
          {item.date}
        </h2>
        <h2 className="card-title title" style={{ fontSize: 12 }}>
          내용
        </h2>
      </div>
    </div>
  ));

  return items;
};

const ImgList = ({ imgList, deletedImage }) => {
  console.log('rendering2');
  return (
    <>
      <main role="main">
        <section className="mt-4 mb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="card-columns">
                {printList(imgList, deletedImage)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="paging">
        <div className="pagination p1">
          <ul>
            <a href="#">
              <li>〈</li>
            </a>
            <a className="is-active" href="#">
              <li>1</li>
            </a>
            <a href="#">
              <li>2</li>
            </a>
            <a href="#">
              <li>3</li>
            </a>
            <a href="#">
              <li>4</li>
            </a>
            <a href="#">
              <li>5</li>
            </a>
            <a href="#">
              <li>〉</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImgList;

import React from 'react';
import Pagination from '../../helpers/pagination';
import { getLimit } from '../../helpers/setting';
import { getDate } from '../../helpers/utils';

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
          onClick={() => deletedImage(item.seq, item.img)}
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
          {/* {item.date} */}
          {getDate(item.date, 'YYMMDD')}
        </h2>
        <h2 className="card-title title" style={{ fontSize: 12 }}>
          내용
        </h2>
      </div>
    </div>
  ));

  return items;
};

const ImgList = ({
  imgList,
  deletedImage,
  handleChangePage,
  total,
  activeProps
}) => {
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

      <Pagination
        total={total}
        handleChangePage={handleChangePage}
        activeProps={activeProps}
        dataPerPage={getLimit}
      />
    </>
  );
};

export default ImgList;

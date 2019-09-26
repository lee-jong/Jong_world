import React from 'react';
import Router from 'next/router';
import { insertDeveloper } from '../../actions/developer';

class Insert extends React.Component {
  state = {
    title: '',
    place: '',
    content: '',
    sample: '',
    image: '',
    upload: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formUploadImg = async e => {
    const { title, place, content, upload, sample } = this.state;
    const formData = new FormData();

    const req = {
      title,
      place,
      content,
      sample
    };
    formData.append('file', upload);
    formData.append('info', JSON.stringify(req));

    try {
      let res = await insertDeveloper(formData);
      if (res.status === 200) {
        alert('등록이 완료되었습니다.');
        this.goToListPage();
      } else {
        alert('오류가 발생하였습니다.');
      }
    } catch (err) {}
  };

  goToListPage = () => {
    let href = '/developer';
    Router.push(href);
  };

  handleChangeImg = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ image: reader.result, upload: file });
    };
    reader.onerror = () => {};
  };

  render() {
    return (
      <>
        <div id="heading">
          <h1>Secret Page</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>jong's developer insert</h2>
              <hr />
              <div
                id="form"
                action="ajaxupload.php"
                method="post"
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input
                    onChange={this.handleChange}
                    type="place"
                    className="form-control"
                    name="title"
                    placeholder="title"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="place">부제목</label>
                  <input
                    onChange={this.handleChange}
                    type="place"
                    className="form-control"
                    name="place"
                    placeholder="place"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="place">파일명</label>
                  <input
                    onChange={this.handleChange}
                    type="place"
                    className="form-control"
                    name="sample"
                    placeholder="developer js file name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content">내용</label>
                  <textarea
                    onChange={this.handleChange}
                    type="content"
                    style={{ height: 100 }}
                    className="form-control"
                    id="content"
                    name="content"
                    placeholder="content"
                    required
                  />
                </div>
                <hr />
                <label htmlFor="place">대표사진 설정</label>
                <input
                  onChange={this.handleChangeImg}
                  id="uploadImage"
                  type="file"
                  accept="image/*"
                  name="image"
                />
                <div id="preview">
                  <img src={this.state.image} />
                </div>
                <br />
                <input
                  className="btn btn-success"
                  value="Upload"
                  onClick={this.formUploadImg}
                />
              </div>
              <div id="err"></div>
              <hr />
            </div>
          </div>
        </div>

        <div className="listButton">
          <button onClick={this.goToListPage}> 목록 </button>
        </div>
      </>
    );
  }
}

export default Insert;

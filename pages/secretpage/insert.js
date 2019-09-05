import React from 'react';
import { insertImgItem } from '../../actions/imgBoard';

class Insert extends React.Component {
  state = {
    title: '',
    place: '',
    content: '',
    image: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formUploadImg = async e => {
    const { image } = this.state;
    const formData = new FormData();
    formData.append('file', image);
    try {
      let res = await insertImgItem(formData);
      console.log('res', res);
    } catch (err) {
      console.log('form img upload err', err);
    }
  };

  handleChangeImg = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({ image: reader.result });
    };

    reader.onerror = () => {
      console.log('img upload err', err);
    };
  };

  handleCreateImgItem = async () => {
    const { title, place, content, image } = this.state;
    try {
      let data = {
        title,
        place,
        content,
        image
      };

      let res = await insertImgItem(data);
      console.log('check ', res);
    } catch (err) {
      console.log('create img item err', err);
    }
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
              <h2>memory's insert</h2>
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
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="title"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="place">장소</label>
                  <input
                    onChange={this.handleChange}
                    type="place"
                    className="form-control"
                    id="place"
                    name="place"
                    placeholder="place"
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
      </>
    );
  }
}

export default Insert;

import React, { Component } from 'react';

import st from './style.module.css';


class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.post.text,
      editHead: this.props.post.head,
      editImages: this.props.post.images,
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.post.text,
      editHead: this.props.post.head,
      editImages: this.props.post.images,
    }));
  };

  onChangeEditImage = event => {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = () => {
      this.setState({
        file: file,
        editImages: reader.result,
      });
    }
    reader.readAsDataURL(file);
  };

  onChangeEditHead = event => {
    this.setState(
      { 
       editHead: event.target.value ,
      }
      );
  };
  onChangeEditText = event => {
    this.setState(
      { 
       editText: event.target.value ,
      }
      );
  };


  onSaveEditPost = () => {
    this.props.onEditPost(
      this.props.post,
      this.state.editHead, 
      this.state.editImages,
      this.state.editText,    
      );
    
    this.setState({ editMode: false });
  };

  render() {
    const { post, onRemovePost } = this.props;
    const { editMode, editText, editHead, images, editImages } = this.state;

    let $image = null;
    if (editImages) {
      $image = (<img src={editImages} value={editImages} onChange={this.onChangeEditImage}/>);
    } else {
      $image = ( <img src={post.images} />);
    }
      
    
    return (
      <li>
        {editMode ? (
          < React.Fragment>
            <input
              type="text"
              value={editHead}
              onChange={this.onChangeEditHead}
            />
            <div className={st.previewComponent}>
                <input className={st.fileInput} 
                  type="file"   
                  onChange={this.onChangeEditImage} />
                <div className={st.imgPreview}>
                {$image}
                </div>
            </div>
          
            <input
              type="text"
              value={editText}
              onChange={this.onChangeEditText}
            />
          </React.Fragment>
         
        ) : (
          <span>
            <strong>
              {post.user.username || post.user.userId}
            </strong>{' '}
            
            <p>{post.head}</p> 

            <img src={post.images}/>
            <p>{post.text}</p>  
            {post.editedAt && <span>(Edited)</span>}
          </span>
        )}

        {editMode ? (
          <span>
            <button onClick={this.onSaveEditPost}>Save</button>
            <button onClick={this.onToggleEditMode}>Reset</button>
          </span>
        ) : (
          <button onClick={this.onToggleEditMode}>Edit</button>
        )}

        {!editMode && (
          <button
            type="button"
            onClick={() => onRemovePost(post.uid)}
          >
            Delete
          </button>
        )}
      </li>
    );
  }
}

export default PostItem;

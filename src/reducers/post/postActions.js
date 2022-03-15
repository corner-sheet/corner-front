import {useSelector} from 'react-redux';
import {API_URL} from '../../utils/Config';
import {timeoutPromise} from '../../utils/Tools';
export const FETCH_POSTS = 'FETCH_POSTS';
export const POST_LOADING = 'POST_LOADING';
export const POST_FAILURE = 'POST_FAILURE';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_PHOTOS = 'ADD_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const EDIT_POST = 'EDIT_POST';

export const fetchPost = id => {
  return async dispatch => {
    dispatch({
      type: POST_LOADING,
    });
    try {
      const response = await timeoutPromise(
        fetch(`${API_URL}/posts/${id}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'GET',
        }),
      );
      if (!response.ok) {
        dispatch({
          type: POST_FAILURE,
        });
        throw new Error('게시글 불러오기를 실패했습니다.');
      }
      const resData = await response.json();
      console.log('resData', JSON.stringify(resData));
      dispatch({
        type: FETCH_POSTS,
        posts: resData,
      });
    } catch (err) {
      throw err;
    }
    return;
  };
};

export const addPost = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: POST_LOADING,
    });
    const draft = useSelector(state => state.post.draft);
    const location = useSelector(state => state.search.current);
    const user = getState().auth.user;
    const post = {
      userId: user.userid,
      image: draft.photos.map(photo => photo.uri),
      description: draft.description,
      location: location,
    };
    try {
      const response = await timeoutPromise(
        fetch(`${API_URL}/posts`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(post),
        }),
      );
      if (!response.ok) {
        dispatch({
          type: POST_FAILURE,
        });
        throw new Error('게시글 작성하기를 실패했습니다.');
      }
      dispatch({
        type: ADD_POST,
        post,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const removePost = id => {
  return async (dispatch, getState) => {
    dispatch({
      type: POST_LOADING,
    });
    const user = getState().auth.user;
    try {
      const response = await timeoutPromise(
        fetch(`${API_URL}/postList/${user.userid}`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'PATCH',
          body: JSON.stringify({
            item: id,
          }),
        }),
      );
      if (!response.ok) {
        dispatch({
          type: POST_FAILURE,
        });
        throw new Error('게시글 삭제하기를 실패했습니다.');
      }
      dispatch({
        type: REMOVE_POST,
        itemId: id,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const addPhotos = ({assets}) => {
  return async dispatch => {
    let photoList = [];
    assets.forEach(photo => {
      photoList.push({
        fileName: photo?.fileName,
        fileSize: photo?.fileSize,
        height: photo?.height,
        type: photo?.type,
        width: photo?.width,
        uri: photo?.uri,
      });
    });
    await dispatch({
      type: ADD_PHOTOS,
      photos: photoList,
    });
  };
};

export const removePhoto = index => {
  return {
    type: REMOVE_PHOTO,
    index,
  };
};

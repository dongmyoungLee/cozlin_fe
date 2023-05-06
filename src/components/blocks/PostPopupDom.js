import ReactDom from 'react-dom';

const PostPopupDom = ({ children }) => {
  const el = document.querySelector('#popupDom');
  return ReactDom.createPortal(children, el);
};

export default PostPopupDom;
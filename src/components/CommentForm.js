// src/components/CommentForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, updateComment } from '../store/newsSlice';
import './CommentForm.css';  // Import the CSS file

const CommentForm = ({ newsId, commentId, existingText, onClose }) => {
  const [text, setText] = useState(existingText || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentId) {
      dispatch(updateComment({ newsId, commentId, text }));
    } else {
      const comment = { id: Date.now(), text };
      dispatch(addComment({ newsId, comment }));
    }
    onClose();
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">{commentId ? 'Update' : 'Add'} Comment</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default CommentForm;

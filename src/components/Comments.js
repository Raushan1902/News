// src/components/Comments.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment } from '../store/newsSlice';
import CommentForm from './CommentForm';
import './Comments.css'; // Import the CSS file

const Comments = ({ newsId }) => {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) =>
    state.news.newsList.find((n) => n.id === newsId)?.comments
  );

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment({ newsId, commentId }));
  };

  const handleAddComment = () => {
    setIsAddingComment(true);
  };

  const handleCloseForm = () => {
    setEditingCommentId(null);
    setIsAddingComment(false);
  };

  return (
    <div className="comments-container">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {editingCommentId === comment.id ? (
              <CommentForm
                newsId={newsId}
                commentId={comment.id}
                existingText={comment.text}
                onClose={handleCloseForm}
              />
            ) : (
              <>
                {comment.text}
                <div>
                  <button onClick={() => handleEditComment(comment.id)}>
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {isAddingComment ? (
        <CommentForm newsId={newsId} onClose={handleCloseForm} />
      ) : (
        <button className="add-comment-button" onClick={handleAddComment}>
          Add Comment
        </button>
      )}
    </div>
  );
};

export default Comments;

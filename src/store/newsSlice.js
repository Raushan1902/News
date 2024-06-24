// src/store/newsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsList: [],
    selectedNews: null,
  },
  reducers: {
    setNewsList: (state, action) => {
      state.newsList = action.payload;
    },
    selectNews: (state, action) => {
      state.selectedNews = action.payload;
    },
    addComment: (state, action) => {
      const { newsId, comment } = action.payload;
      const news = state.newsList.find(n => n.id === newsId);
      if (news) {
        news.comments.push(comment);
      }
    },
    updateComment: (state, action) => {
      const { newsId, commentId, text } = action.payload;
      const news = state.newsList.find(n => n.id === newsId);
      if (news) {
        const comment = news.comments.find(c => c.id === commentId);
        if (comment) {
          comment.text = text;
        }
      }
    },
    deleteComment: (state, action) => {
      const { newsId, commentId } = action.payload;
      const news = state.newsList.find(n => n.id === newsId);
      if (news) {
        news.comments = news.comments.filter(c => c.id !== commentId);
      }
    },
  },
});

export const { setNewsList, selectNews, addComment, updateComment, deleteComment } = newsSlice.actions;
export default newsSlice.reducer;

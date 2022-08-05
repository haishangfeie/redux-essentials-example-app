import { configureStore } from '@reduxjs/toolkit'
import postsReducers from '../features/posts/postsSlice'
import userReducers from '../features/users/usersSlice'
import notificationsReducers from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducers,
    users: userReducers,
    notifications: notificationsReducers
  },
})

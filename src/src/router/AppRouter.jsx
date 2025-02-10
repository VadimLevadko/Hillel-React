import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainTemplate from "../app/templates/MainTemplate/MainTemplate.jsx";
import Home from '../app/pages/home/Home.jsx'
import Blog from '../app/pages/blog/Blog.jsx'
import PostDetails from '../app/pages/blog/post-detail/PostDetail.jsx'
import Login from '../app/pages/login/Login.jsx'
import Profile from '../app/pages/profile/Profile.jsx'
import ProtectedRoute from "../app/components/ProtectedRoute/";

export default function AppRouter () {
    return (
        <Router>
            <MainTemplate>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<PostDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } />
                </Routes>
            </MainTemplate>
        </Router>
    )
}
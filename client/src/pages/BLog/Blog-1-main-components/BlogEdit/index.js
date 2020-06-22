// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

// -------------------- components --------------------
import MyNavBar from '../../../../components/Navbar'
import MyMenu from '../../../../components/NavbarMenu'
import MyFooter from '../../../../components/Footer'
// 麵包削
import BlogCrumb from '../BlogCrumb'
// 引入Main
import BlogMainEditInputs from '../../Blog-2-main/Blog-Main-Edit-1-Inputs'
// 引入Aside
import BlogAsidePhoto from '../../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../../Blog-2-Aside/Blog-Aside-2-Community'

// -------------------- scss --------------------
import '../../../../assets/scss/blog_edit.scss'

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogEdit(props) {

  const[editBlogTitle, setEditBlogTitle] = useState('');
  const[editBlogContent01, setEditBlogContent01] = useState('');
  const[editBlogContent02, setEditBlogContent02] = useState('');


  return (
    <>
      <div className="blog-edit-spacing"></div>
      <div class="wrap-top">
      <div className="blog-crumb">        
        <Link to="../">首頁</Link>/<Link to="./YongMyBlog">部落格個人頁</Link>/<Link to="./BlogEdit">部落格編輯頁</Link>
      </div>
      </div>
      <div class="wrap-mid">
        <div class="blog-edit blog-d-flex">
          <div class="blog-edit-main">
            <BlogMainEditInputs 
              editBlogTitle = {editBlogTitle}
              setEditBlogTitle ={setEditBlogTitle}
              editBlogContent01 = {editBlogContent01}
              setEditBlogContent01 ={setEditBlogContent01}
              editBlogContent02 ={editBlogContent02}
              setEditBlogContent02 ={setEditBlogContent02}
            />
          </div>
          <div class="blog-edit-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
          </div>
        </div>
      </div>
      <div className="blog-edit-spacing"></div>
    </>
  )
}
export default withRouter(BlogEdit)

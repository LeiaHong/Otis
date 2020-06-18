// 函式元件
import React, { Fragment, useEffect } from 'react'
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

// -------------------- scss --------------------
// import '../../../assets/scss/blog_standard.scss'

// -------------------- imgs --------------------
import BlogCard from '../../../assets/img/blog-img/blog-standard/Blog-card.png'
import IconSearch from '../../../assets/img/blog-img/blog-standard/icon-search.svg'
import NextPage from '../../../assets/img/blog-img/blog-standard/next-page.svg'
import PrevPage from '../../../assets/img/blog-img/blog-standard/prev-page.svg'
import NextPageHover from '../../../assets/img/blog-img/blog-standard/next-page-hover.svg'
import PrevPageHover from '../../../assets/img/blog-img/blog-standard/prev-page-hover.svg'

// -------------------- func --------------------

function BlogMainStandardList(props) {
  return (
    <>
      <div className="blog-btns blog-d-flex blog-justify-content-between">
        <div className="blog-btns-left">
          <Link to="../BlogStandard" className="blog-btns-left-Link">
            全部文章
          </Link>
          <Link to="../BlogUser" className="blog-btns-left-Link">
            個人文章
          </Link>
        </div>
        <div className="blog-btns-right blog-d-flex blog-justify-content-between">
          <select name="" id="">
            <option value="0">依順序</option>
            <option value="1">依順序</option>
          </select>
          <select name="" id="">
            <option value="0">依最新發文</option>
            <option value="1">依最舊發文</option>
            <option value="2">依最後修改</option>
            <option value="3">依最後回覆</option>
          </select>
          <figure className="blog-cover">
            <img src={IconSearch} alt="" />
          </figure>
        </div>
      </div>
      <div className="blog-list blog-d-flex">
        <div className="blog-card">
          <figure className="blog-card-fig">
            <img className="blog-cover" src={BlogCard} alt="" />
          </figure>
          <div className="blog-card-btns"></div>
          <div className="blog-card-title">文章標題</div>
          <div className="blog-card-content">
            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
          </div>
          <div className="blog-card-calendar">
            <div className="blog-card-calendar-in">
              <h2>01</h2>
              <h5>6月</h5>
            </div>
          </div>
          <div className="read-more">
            <button className="read-more-btn">閱讀文章</button>
          </div>
        </div>
        <div className="blog-card">
          <figure className="blog-card-fig">
            <img className="blog-cover" src={BlogCard} alt="" />
          </figure>
          <div className="blog-card-btns"></div>
          <div className="blog-card-title">文章標題</div>
          <div className="blog-card-content">
            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
          </div>
          <div className="blog-card-calendar">
            <div className="blog-card-calendar-in">
              <h2>01</h2>
              <h5>6月</h5>
            </div>
          </div>
          <div className="read-more">
            <button className="read-more-btn">閱讀文章</button>
          </div>
        </div>
        <div className="blog-card">
          <figure className="blog-card-fig">
            <img className="blog-cover" src={BlogCard} alt="" />
          </figure>
          <div className="blog-card-btns"></div>
          <div className="blog-card-title">文章標題</div>
          <div className="blog-card-content">
            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
          </div>
          <div className="blog-card-calendar">
            <div className="blog-card-calendar-in">
              <h2>01</h2>
              <h5>6月</h5>
            </div>
          </div>
          <div className="read-more">
            <button className="read-more-btn">閱讀文章</button>
          </div>
        </div>
        <div className="blog-card">
          <figure className="blog-card-fig">
            <img className="blog-cover" src={BlogCard} alt="" />
          </figure>
          <div className="blog-card-btns"></div>
          <div className="blog-card-title">文章標題</div>
          <div className="blog-card-content">
            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
          </div>
          <div className="blog-card-calendar">
            <div className="blog-card-calendar-in">
              <h2>01</h2>
              <h5>6月</h5>
            </div>
          </div>
          <div className="read-more">
            <button className="read-more-btn">閱讀文章</button>
          </div>
        </div>
        <div className="blog-card">
          <figure className="blog-card-fig">
            <img className="blog-cover" src={BlogCard} alt="" />
          </figure>
          <div className="blog-card-btns"></div>
          <div className="blog-card-title">文章標題</div>
          <div className="blog-card-content">
            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
          </div>
          <div className="blog-card-calendar">
            <div className="blog-card-calendar-in">
              <h2>01</h2>
              <h5>6月</h5>
            </div>
          </div>
          <div className="read-more">
            <button className="read-more-btn">閱讀文章</button>
          </div>
        </div>
        <div className="blog-card">
          <figure className="blog-card-fig">
            <img className="blog-cover" src={BlogCard} alt="" />
          </figure>
          <div className="blog-card-btns"></div>
          <div className="blog-card-title">文章標題</div>
          <div className="blog-card-content">
            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
          </div>
          <div className="blog-card-calendar">
            <div className="blog-card-calendar-in">
              <h2>01</h2>
              <h5>6月</h5>
            </div>
          </div>
          <div className="read-more">
            <button className="read-more-btn">閱讀文章</button>
          </div>
        </div>
      </div>
      <div className="blog-standard-pages blog-d-flex">
        <div className="prev-page">
          <img src={PrevPage} alt="" />
        </div>
        <div className="current-page">1</div>
        <div className="current-page">2</div>
        <div className="current-page">3</div>
        <div className="mores">...</div>
        <div className="next-page">
          <img src={NextPage} alt="" />
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogMainStandardList)

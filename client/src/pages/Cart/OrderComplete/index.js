// 函式元件
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

function OrderComplete(props) {
  const { orderTotal, orderPayment, orderId, setOrderId } = props.allprops
  const [dataOrder, setDataOrder] = useState([])

  //取得訂單資料
  const getNewOrderAsync = async (addOrderFormData, callback) => {
    const request = new Request('http://localhost:3009/order/newOrder', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    // console.log('response', response)
    const data = await response.json()
    console.log('data', data)
    // console.log('orderID data row', data.row)
    console.log('data.dataOrderRow[0].orderId:', data.dataOrderRow[0].orderId)
    // await setOrderId(data.dataOrderRow[0].orderId)
    await setDataOrder(data.dataOrderRow[0])
    // await console.log('orderNum',orderNum)
  }

  useEffect(() => {
    getNewOrderAsync()
  }, [])

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">返回 購物車</Link>
      </div>
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送資料</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>付款方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-gift"></i>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
        {/* 購買完成顯示 */}
        <table className="cartDone-table">
          <tbody>
            <tr>
              <td>謝謝。您的訂單已收到。</td>
              <td></td>
            </tr>
            <tr>
              <td>訂單號:</td>
              <td>{dataOrder.orderId}</td>
            </tr>
            <tr>
              <td>日期：</td>

              {/* <td>2020年7月10日</td> */}
              <td>{dataOrder.created_at}</td>
            </tr>
            <tr>
              <td>配送方式：</td>
              <td>{dataOrder.deliveryTypeName}</td>
            </tr>
            <tr>
              <td>付款方式：</td>
              <td>{dataOrder.paymentTypeName}</td>
            </tr>
            <tr>
              <td>合計:</td>
              <td>{dataOrder.total}</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <button type="button">
                  <Link to="/KMembers/MembersCartList">查看訂單</Link>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}
export default withRouter(OrderComplete)

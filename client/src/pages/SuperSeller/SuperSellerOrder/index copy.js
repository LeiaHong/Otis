// 函式元件
import React, { useEffect, useState } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

// antd
import { Switch } from 'antd';
import '../../../assets/scss/SuperSellerOrder.scss'
function SuperSellerOrder(props) {
    const key = 'updatable';
    // 父層 傳入 hooks
    const { userdata, setUserdata, sellerOrderData, setSellerOrderData } = props.allprops;
    const user = localStorage.getItem('memberData');
    // console.log('userdata',userdata)
    // console.log('SellerOrderData',SellerOrderData)
    
    useEffect(() => {
        fetch("http://localhost:3009/superseller/listSellerUserOrder", {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then(result => result.json())
            .then((response) => {
                console.log('response', response);
                setSellerOrderData(response)
            })
    }, [userdata])


    return (
        <div className="members_right">
            <div className="members_right_inner">
                {/* title */}
                <div className="members_r_top_text">
                    <h1>訂單出貨</h1>
                    <p>管理你的訂單以按時出貨</p>
                </div>

                {/* 主要內容 */}
                <div className="SellerOrderInner">
                    {/* table */}
                    <div className="SellerOrderInner">
                        <div class="tbl-header">
                            <table className="sellerOrderTable" cellSpacing="1">
                                <thead>
                                    <tr>
                                        <th>訂單編號</th>
                                        <th>商品名稱</th>
                                        <th>付款方式</th>
                                        <th>付款狀態</th>
                                        <th>配送方式</th>
                                        <th>配送狀態</th>
                                        <th>訂單備註</th>
                                        <th>新增時間</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="tbl-content">
                            <table className="sellerOrderTable" cellSpacing="1">
                                <tbody>
                                    {sellerOrderData.length > 0 ? (
                                        <>
                                            {sellerOrderData.map((data, index) => {
                                                return (
                                                        <tr key={index}>
                                                            <td>{data.orderId}</td>
                                                            <td>{data.itemName}</td>
                                                            <td>{data.paymentTypeName}</td>

                                                            <td><Switch checkedChildren="已付" unCheckedChildren="未付" defaultChecked={data.paymentState !==1?  true : false} /></td>
                                                            
                                                            <td>{data.deliveryTypeName}</td>

                                                            <td><Switch checkedChildren="出貨" unCheckedChildren="未出" defaultChecked={data.deliveryState !==1?  true : false} /></td>
                                                            
                                                            <td>{data.orderRemark}</td>
                                                            <td>{data.created_at}</td>
                                                        </tr>
                                                )
                                            })}
                                        </>
                                    ) : (
                                            <>
                                                <div className="sellerTableNothing">此時此刻...你還沒有任何訂單</div>
                                            </>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withRouter(SuperSellerOrder);
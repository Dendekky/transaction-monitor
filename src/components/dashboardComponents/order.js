import React from 'react';

export default function  Order (props) {
    return(
    <div>
        <h2>Orders</h2>
        <div>
            Pending Orders
        <span>20</span>
        </div>
        <div>
            Reconciled Orders
        <span>80</span>
        </div>
        <div>
            Total Orders
        <span>10</span>>
        </div>

        <h2>Payments</h2>
        <div>
            Un-reconciled Payments
        <span>20</span>
        </div>
        <div>
            Reconciled Payments
        <span>80</span>
        </div>
        <div>
            Total Payments
        <span>10</span>
        </div>
    </div>
    )
}

const OrderItem = ({id, createTime, totalAmount, detailOrders}) => {
    return (
        <div>
            <h2>Order ID: {id}</h2>
            <p>Time order: {createTime}</p>
            <p>Total Amount: {totalAmount}</p>
            <ul>
                {detailOrders.map((detailOrder) => (
                    <li key={detailOrder.id}>
                        {detailOrder.product.name} - {detailOrder.product.price} - {detailOrder.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default OrderItem;
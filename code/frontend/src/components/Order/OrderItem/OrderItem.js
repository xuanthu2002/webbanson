import { Box, Button, Flex, Image, Input, Td, Tr } from '@chakra-ui/react';
import format from '../../../format/currencyFormat.js';
import moment from 'moment/moment.js';

const OrderItem = ({ id, createTime, totalAmount, paymentMethod, status, detailOrders }) => {
    return (
        // <div>
        //     <h2>Order ID: {id}</h2>
        //     <p>Time order: {createTime}</p>
        //     <p>Total Amount: {totalAmount}</p>
        //     <p>Payment Method: {paymentMethod}</p>
        //     <p>Status: {status}</p>
        //     <ul>
        //         {detailOrders.map((detailOrder) => (
        //             <li key={detailOrder.id}>
        //                 {detailOrder.product.name} - {detailOrder.product.price} - {detailOrder.quantity}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <Tr>
            <Td>
                <Flex gap={'12px'} align='center'>
                    {id}
                </Flex>
            </Td>
            <Td>
                {moment(createTime).format('DD/MM/YYYY, h:mm:ss a')}
            </Td>
            <Td>
                {format.format(totalAmount)}
            </Td>
            <Td>
                {paymentMethod}
            </Td>
            <Td>
                {status}
            </Td>
        </Tr>
    );
};
export default OrderItem;
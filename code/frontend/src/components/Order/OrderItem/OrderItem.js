import { Button, Flex, Td, Tr } from '@chakra-ui/react';
import format from '../../../format/currencyFormat.js';
import moment from 'moment/moment.js';
import { Link } from 'react-router-dom';
import useNotification from '../../../hook/useNotification.js';
import orderApi from '../../../api/orderApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from '../../../redux/selectors.js';
import { cancelOrderThunk, doneOrderThunk } from '../../../redux/orderSlice.js';
import { useEffect, useState } from 'react';


const OrderItem = ({ id, createTime, totalAmount, paymentMethod, status }) => {

    const token = useSelector(tokenSelector);
    const { sendNotification } = useNotification();
    const dispatch = useDispatch();

    const cancelOrderHandle = () => {
        sendNotification(
            dispatch(cancelOrderThunk({ token, id }))
        );
    }

    const doneOrderHandle = () => {
        sendNotification(
            dispatch(doneOrderThunk({ token, id }))
        );
    }

    return (

        <Tr>
            <Td>
                <Flex gap={'12px'} align='center'>
                    <Link to={`/order/` + id}>
                        {id}
                    </Link>
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
            <Td>
                <Button onClick={cancelOrderHandle}>Hủy</Button>
            </Td>
            {localStorage.getItem("role") === "admin" && (
                <Td>
                    <Button onClick={doneOrderHandle}>Hoàn thành</Button>
                </Td>
            )}
        </Tr>
    );
};
export default OrderItem;
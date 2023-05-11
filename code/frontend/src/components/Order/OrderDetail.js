import {
    Box,
    Button,
    Flex,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
    Text
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.js';
import orderApi from '../../api/orderApi.js';
import { useParams } from 'react-router-dom';
import DetailOrderItem from './DetailOrderItem/DetailOrderItem.js';
import format from '../../format/currencyFormat.js';


const OrderDetail = () => {

    const param = useParams();
    const [orderDetail, setOrderDetail] = useState({});
    const orderId = param.orderId;

    const getOrderDetail = async () => {
        const response = await orderApi.getById(orderId)
            .then(response => {
                setOrderDetail(response.data);
            });
    }

    useEffect(() => {
        getOrderDetail();
    }, []);

    return (
        <Layout>
            <Box bg='#fff' borderRadius='12px' p='24px'>
                <Box
                    textAlign={'center'}
                    fontWeight='600'
                    fontSize='24px'
                    textTransform={'uppercase'}
                >
                    Detail Order
                </Box>
                <Box marginTop='12px'>
                    <Box>
                        <Box margin='20px 24px'>
                            <Text>Người nhận: {orderDetail.recipientName}</Text>
                            <Text>Số điện thoại: {orderDetail.recipientPhoneNumber}</Text>
                            <Text>Địa chỉ: {orderDetail.shippingAddress}</Text>
                        </Box>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID</Th>
                                        <Th>Product</Th>
                                        <Th>Quantity</Th>
                                        <Th>Total Amount</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {orderDetail.detailOrders?.map((item) => (
                                        <DetailOrderItem
                                            key={item.id}
                                            product={item.product}
                                            quantity={item.quantity}
                                            totalAmount={item.totalAmount}
                                        />
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Flex
                            justify='flex-end'
                            align='center'
                            gap={'20px'}
                            fontWeight='600'
                            fontSize='20px'
                            marginTop='24px'
                        >
                            Tổng: {format.format(orderDetail.totalAmount)}
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default OrderDetail;

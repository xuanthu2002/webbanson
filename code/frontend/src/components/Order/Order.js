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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.js';
import orderApi from '../../api/orderApi.js';
import OrderItem from './OrderItem/OrderItem.js';
import { tokenSelector } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';


const Order = () => {
    const [orders, setOrders] = useState([]);
    const token = useSelector(tokenSelector);

    const getOrders = async () => {
        const response = await orderApi.getAll(token)
            .then(response => {
                setOrders(response.data);
                console.log(response.data);
            })
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <Layout>
            <Box bg='#fff' borderRadius='12px' p='24px'>
                <Box
                    textAlign={'center'}
                    fontWeight='600'
                    fontSize='24px'
                    textTransform={'uppercase'}
                >
                    List orders
                </Box>
                <Box marginTop='12px'>
                    <Box>
                        {/* <div>
                            {orders.map((order) => (
                                <OrderItem
                                    id={order.id}
                                    createTime={order.createTime}
                                    totalAmount={order.totalAmount}
                                    paymentMethod={order.paymentMethod}
                                    status={order.status}
                                    detailOrders={order.detailOrders}
                                />
                            ))}
                        </div> */}
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>ID</Th>
                                        <Th>Ngày đặt</Th>
                                        <Th>Tổng</Th>
                                        <Th>Phương thức thanh toán</Th>
                                        <Th>Trạng thái</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {orders.map((order) => (
                                        <OrderItem
                                            id={order.id}
                                            createTime={order.createTime}
                                            totalAmount={order.totalAmount}
                                            paymentMethod={order.paymentMethod}
                                            status={order.status}
                                            detailOrders={order.detailOrders}
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
                        >
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Order;

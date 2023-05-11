import {
    Box,
    Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout.js';
import orderApi from '../../api/orderApi.js';
import OrderItem from './OrderItem/OrderItem.js';

const Order = () => {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const response = await orderApi.getAll('5202af63-b137-48d9-ac18-fc5832eebf08')
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
                        <div>
                            {orders.map((order) => (
                                <OrderItem
                                    id={order.id}
                                    createTime={order.createTime}
                                    totalAmount={order.totalAmount}
                                    detailOrders={order.detailOrders}
                                />
                            ))}
                        </div>
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

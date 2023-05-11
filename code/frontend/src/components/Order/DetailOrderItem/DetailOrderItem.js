import { Box, Button, Flex, Input, Td, Tr } from '@chakra-ui/react';
import format from '../../../format/currencyFormat.js';
import { Link } from 'react-router-dom';

const DetailOrderItem = ({ product, quantity, totalAmount }) => {

    return (
        <Tr>
            <Td>
                <Flex gap={'12px'} align='center'>
                    <Link to={`/product/` + product.id}>
                        {product.id}
                    </Link>
                </Flex>
            </Td>
            <Td>
                <Link to={`/product/` + product.id}>
                    {product.name}
                </Link>
            </Td>
            <Td>
                {quantity}
            </Td>
            <Td>
                {format.format(totalAmount)}
            </Td>
        </Tr>
    );
};
export default DetailOrderItem;
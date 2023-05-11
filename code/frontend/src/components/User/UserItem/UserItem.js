import { Box, Button, Flex, Image, Input, Td, Tr } from "@chakra-ui/react";
import format from "../../../format/currencyFormat.js";
import moment from "moment/moment.js";

const UserItem = ({ firstName, lastName, email, role }) => {
    return (
        <Tr>
            <Td>{firstName}</Td>
            <Td>{lastName}</Td>
            <Td>{email}</Td>
            <Td>{role}</Td>
        </Tr>
    );
};
export default UserItem;
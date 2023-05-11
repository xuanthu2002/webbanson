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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout.js";
import { tokenSelector, userSelector } from "../../redux/selectors.js";
import { useSelector } from "react-redux";
import UserItem from "./UserItem/UserItem.js";
import userApi from "../../api/userApi.js";

const User = () => {
    const [users, setUsers] = useState([]);
    const token = useSelector(tokenSelector);

    const getUsers = async () => {
        const response = await userApi.getAll(token).then((response) => {
            setUsers(response.data);
            //   console.log(response.data);
        });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Layout>
            <Box bg="#fff" borderRadius="12px" p="24px">
                <Box
                    textAlign={"center"}
                    fontWeight="600"
                    fontSize="24px"
                    textTransform={"uppercase"}
                >
                    List users
                </Box>
                <Box marginTop="12px">
                    <Box>
                        <TableContainer>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>FirstName</Th>
                                        <Th>LastName</Th>
                                        <Th>Email</Th>
                                        <Th>Role</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {users.map((user) => (
                                        <UserItem
                                            firstName={user.firstName}
                                            lastName={user.lastName}
                                            email={user.email}
                                            role={user.role}
                                        />
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Flex
                            justify="flex-end"
                            align="center"
                            gap={"20px"}
                            fontWeight="600"
                            fontSize="20px"
                        ></Flex>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default User;
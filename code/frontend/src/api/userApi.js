import axiosPro from "../redux/axiosConfig";

const userApi = {
  getAll() {
    const url = "/user/listUser";
    return axiosPro.get(url);
  },
};
export default userApi;
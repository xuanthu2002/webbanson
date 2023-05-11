import axiosPro from "../redux/axiosConfig"

const orderApi = {
    getAll(token) {
        const url = '/order?token=' + token;
        return axiosPro.get(url);
    }
}
export default orderApi;
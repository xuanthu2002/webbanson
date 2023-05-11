import axiosPro from "../redux/axiosConfig"

const orderApi = {
    getAllOrder() {
        const url = '/order/getAll';
        return axiosPro.get(url);
    },

    getAll(token) {
        const url = '/order?token=' + token;
        return axiosPro.get(url);
    },

    getById(id) {
        const url = '/order/get?id=' + id;
        return axiosPro.get(url);
    },

    cancelOrder({token, id}) {
        const url = 'order/cancel?token=' + token + '&id=' + id;
        return axiosPro.put(url);
    }
}
export default orderApi;
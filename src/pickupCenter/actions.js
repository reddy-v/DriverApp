export const getSelectedCity = (city) => {
    return {
        type: "GET_SELECTED_CITY",
        payload: city
    }
};export const getSelectedDeliveryCenter = (deliveryCenter) => {
    return {
        type: "GET_SELECTED_CENTER",
        payload: deliveryCenter
    }
};
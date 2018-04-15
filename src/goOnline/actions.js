export const getSelectedDeliveryCenter = (deliveryCenter) => {
    return {
        type: "GET_SELECTED_CENTER",
        payload: deliveryCenter
    }
};

export const getSelectedTask = (type) => {
    return {
        type: "GET_SELECTED_TASK",
        payload: type
    }
};
export const addToTaskList = (payload) => {
    return {
        type: "ADD_TO_TASK_LIST",
        payload
    }
};
export interface recentOrders {
    id: string;
    name: string;
    product: string;
    delivery_date: string;
    status: string;
    tracking_no: string;
    shipping: boolean;
}

export interface recentOrdersWithIndex {
    num: string;
    id: string;
    name: string;
    product: string;
    delivery_date: string;
    status: string;
    tracking_no: string;
    shipping: boolean;
}
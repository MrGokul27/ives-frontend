import React, { useState } from "react";
import {
    UploadOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    TagOutlined,
    GiftOutlined,
    FileTextOutlined,
    CreditCardOutlined,
    HeartOutlined,
    BellOutlined,
    ShopOutlined,
    SettingOutlined,
    BarChartOutlined
} from "@ant-design/icons";
import { Layout, Menu, Table, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Define sidebar items
    const items = [
        { key: "users", icon: <UserOutlined />, label: "Users" },
        { key: "orders", icon: <ShoppingCartOutlined />, label: "Orders" },
        { key: "products", icon: <UploadOutlined />, label: "Products" },
        { key: "categories", icon: <TagOutlined />, label: "Categories" },
        { key: "coupons", icon: <GiftOutlined />, label: "Coupons" },
        { key: "reviews", icon: <FileTextOutlined />, label: "Reviews" },
        { key: "payments", icon: <CreditCardOutlined />, label: "Payments" },
        { key: "wishlist", icon: <HeartOutlined />, label: "Wishlist" },
        { key: "notifications", icon: <BellOutlined />, label: "Notifications" },
        { key: "vendors", icon: <ShopOutlined />, label: "Vendors" },
        { key: "settings", icon: <SettingOutlined />, label: "Settings" },
        { key: "logs", icon: <BarChartOutlined />, label: "Reports & Logs" },
    ];

    // State for active menu item
    const [activeTab, setActiveTab] = useState("users");

    // Table Data (Example Data)
    const tables = {
        users: {
            columns: [
                { title: "ID", dataIndex: "id", key: "id" },
                { title: "Name", dataIndex: "name", key: "name" },
                { title: "Email", dataIndex: "email", key: "email" },
            ],
            data: [
                { id: 1, name: "John Doe", email: "john@example.com" },
                { id: 2, name: "Jane Smith", email: "jane@example.com" },
            ],
        },
        orders: {
            columns: [
                { title: "Order ID", dataIndex: "id", key: "id" },
                { title: "Customer", dataIndex: "customer", key: "customer" },
                { title: "Total", dataIndex: "total", key: "total" },
            ],
            data: [
                { id: 101, customer: "John Doe", total: "$50" },
                { id: 102, customer: "Jane Smith", total: "$75" },
            ],
        },
        products: {
            columns: [
                { title: "Product ID", dataIndex: "id", key: "id" },
                { title: "Name", dataIndex: "name", key: "name" },
                { title: "Price", dataIndex: "price", key: "price" },
            ],
            data: [
                { id: 201, name: "T-Shirt", price: "$20" },
                { id: 202, name: "Jeans", price: "$40" },
            ],
        },
        categories: {
            columns: [
                { title: "Category ID", dataIndex: "id", key: "id" },
                { title: "Name", dataIndex: "name", key: "name" },
            ],
            data: [
                { id: 301, name: "Men" },
                { id: 302, name: "Women" },
            ],
        },
        coupons: {
            columns: [
                { title: "Coupon Code", dataIndex: "code", key: "code" },
                { title: "Discount", dataIndex: "discount", key: "discount" },
            ],
            data: [
                { code: "SAVE10", discount: "10%" },
                { code: "FREESHIP", discount: "Free Shipping" },
            ],
        },
        reviews: {
            columns: [
                { title: "Review ID", dataIndex: "id", key: "id" },
                { title: "Product", dataIndex: "product", key: "product" },
                { title: "Rating", dataIndex: "rating", key: "rating" },
            ],
            data: [
                { id: 401, product: "T-Shirt", rating: "5/5" },
                { id: 402, product: "Jeans", rating: "4/5" },
            ],
        },
        payments: {
            columns: [
                { title: "Payment ID", dataIndex: "id", key: "id" },
                { title: "Amount", dataIndex: "amount", key: "amount" },
            ],
            data: [
                { id: 501, amount: "$50" },
                { id: 502, amount: "$100" },
            ],
        },
        wishlist: {
            columns: [
                { title: "Wishlist ID", dataIndex: "id", key: "id" },
                { title: "Product", dataIndex: "product", key: "product" },
            ],
            data: [
                { id: 601, product: "T-Shirt" },
                { id: 602, product: "Jeans" },
            ],
        },
        notifications: {
            columns: [
                { title: "Notification ID", dataIndex: "id", key: "id" },
                { title: "Message", dataIndex: "message", key: "message" },
            ],
            data: [
                { id: 701, message: "Your order has been shipped" },
                { id: 702, message: "New discount available" },
            ],
        },
        vendors: {
            columns: [
                { title: "Vendor ID", dataIndex: "id", key: "id" },
                { title: "Name", dataIndex: "name", key: "name" },
            ],
            data: [
                { id: 801, name: "ABC Clothing" },
                { id: 802, name: "XYZ Fashion" },
            ],
        },
        logs: {
            columns: [
                { title: "Log ID", dataIndex: "id", key: "id" },
                { title: "Action", dataIndex: "action", key: "action" },
            ],
            data: [
                { id: 901, action: "User Login" },
                { id: 902, action: "Product Added" },
            ],
        },
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sider>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["users"]}
                    items={items}
                    onClick={({ key }) => setActiveTab(key)}
                />
            </Sider>

            {/* Main Layout */}
            <Layout>
                <Header style={{ background: colorBgContainer }} />
                <Content style={{ margin: "24px 16px 0" }}>
                    <div style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                        <h1>{items.find(item => item.key === activeTab)?.label}</h1>
                        <Table dataSource={tables[activeTab].data} columns={tables[activeTab].columns} rowKey="id" />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()}</Footer>
            </Layout>
        </Layout>
    );
};

export default Dashboard;

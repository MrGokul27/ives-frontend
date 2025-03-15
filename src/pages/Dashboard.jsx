import { Table } from 'antd';

const Dashboard = () => {
    const orders = [
        { id: 1, customer: 'John Doe', total: '$50' },
        { id: 2, customer: 'Jane Smith', total: '$75' },
    ];

    const columns = [
        { title: 'Customer', dataIndex: 'customer', key: 'customer' },
        { title: 'Total', dataIndex: 'total', key: 'total' },
    ];

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <Table dataSource={orders} columns={columns} />
        </div>
    );
};

export default Dashboard;

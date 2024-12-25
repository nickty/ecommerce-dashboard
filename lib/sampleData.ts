export const sampleCustomers = [
    { _id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', orders: 5, totalSpent: 500.00 },
    { _id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901', orders: 3, totalSpent: 300.50 },
    { _id: '3', name: 'Bob Johnson', email: 'bob@example.com', phone: '345-678-9012', orders: 7, totalSpent: 750.25 },
    { _id: '4', name: 'Alice Brown', email: 'alice@example.com', phone: '456-789-0123', orders: 2, totalSpent: 150.75 },
    { _id: '5', name: 'Charlie Davis', email: 'charlie@example.com', phone: '567-890-1234', orders: 4, totalSpent: 400.00 },
  ];
  
  export const sampleProducts = [
    { _id: '1', name: 'Laptop', description: 'High-performance laptop', price: 999.99, category: 'Electronics', stock: 50 },
    { _id: '2', name: 'Smartphone', description: 'Latest model smartphone', price: 699.99, category: 'Electronics', stock: 100 },
    { _id: '3', name: 'Running Shoes', description: 'Comfortable running shoes', price: 79.99, category: 'Clothing', stock: 200 },
    { _id: '4', name: 'Coffee Maker', description: 'Automatic coffee maker', price: 49.99, category: 'Home & Kitchen', stock: 75 },
    { _id: '5', name: 'Novel', description: 'Bestselling fiction novel', price: 14.99, category: 'Books', stock: 150 },
  ];
  
  export const sampleOrders = [
    { 
      _id: '1', 
      customer: sampleCustomers[0], 
      items: [
        { product: sampleProducts[0], quantity: 1 },
        { product: sampleProducts[2], quantity: 2 }
      ],
      total: 1159.97,
      status: 'Completed',
      createdAt: '2023-05-01T10:00:00Z'
    },
    { 
      _id: '2', 
      customer: sampleCustomers[1], 
      items: [
        { product: sampleProducts[1], quantity: 1 }
      ],
      total: 699.99,
      status: 'Processing',
      createdAt: '2023-05-02T11:30:00Z'
    },
    { 
      _id: '3', 
      customer: sampleCustomers[2], 
      items: [
        { product: sampleProducts[3], quantity: 1 },
        { product: sampleProducts[4], quantity: 3 }
      ],
      total: 94.96,
      status: 'Shipped',
      createdAt: '2023-05-03T09:15:00Z'
    },
    { 
      _id: '4', 
      customer: sampleCustomers[3], 
      items: [
        { product: sampleProducts[2], quantity: 1 }
      ],
      total: 79.99,
      status: 'Completed',
      createdAt: '2023-05-04T14:45:00Z'
    },
    { 
      _id: '5', 
      customer: sampleCustomers[4], 
      items: [
        { product: sampleProducts[0], quantity: 1 },
        { product: sampleProducts[1], quantity: 1 }
      ],
      total: 1699.98,
      status: 'Processing',
      createdAt: '2023-05-05T16:20:00Z'
    },
  ];
  
  
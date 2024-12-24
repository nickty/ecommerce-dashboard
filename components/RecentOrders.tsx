import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  
  const recentOrders = [
    { id: '1', product: 'Product 1', customer: 'John Doe', total: '$99.99', status: 'Completed' },
    { id: '2', product: 'Product 2', customer: 'Jane Smith', total: '$149.99', status: 'Processing' },
    { id: '3', product: 'Product 3', customer: 'Bob Johnson', total: '$79.99', status: 'Shipped' },
    { id: '4', product: 'Product 4', customer: 'Alice Brown', total: '$199.99', status: 'Pending' },
    { id: '5', product: 'Product 5', customer: 'Charlie Davis', total: '$59.99', status: 'Completed' },
  ]
  
  export function RecentOrders() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }
  
  
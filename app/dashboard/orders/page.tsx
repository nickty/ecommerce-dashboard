import { format } from "date-fns"
import { ChevronDown, MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    status: "Processing",
    total: "$250.00",
    date: new Date("2024-01-01"),
    items: 3,
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    status: "Shipped",
    total: "$450.00",
    date: new Date("2024-01-02"),
    items: 5,
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    status: "Delivered",
    total: "$120.00",
    date: new Date("2024-01-03"),
    items: 2,
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    status: "Processing",
    total: "$780.00",
    date: new Date("2024-01-04"),
    items: 7,
  },
  {
    id: "ORD005",
    customer: "Charlie Wilson",
    status: "Shipped",
    total: "$350.00",
    date: new Date("2024-01-05"),
    items: 4,
  },
]

export default function OrdersPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <div className="flex items-center space-x-2">
          <Button>Download All</Button>
        </div>
      </div>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
            <CardDescription>
              A list of all orders including their details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>
                    <Button variant="ghost" className="h-8 w-12">
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        order.status === "Processing" ? "bg-yellow-50 text-yellow-800" :
                        order.status === "Shipped" ? "bg-blue-50 text-blue-800" :
                        "bg-green-50 text-green-800"
                      }`}>
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{format(order.date, "MMM d, yyyy")}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Update status</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Cancel order</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


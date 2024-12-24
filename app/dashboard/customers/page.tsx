import { Download, Search, UserPlus } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const customers = [
  {
    id: "CUST001",
    name: "John Doe",
    email: "john@example.com",
    orders: 15,
    spent: "$1,250.00",
    lastOrder: "2024-01-01",
    status: "Active",
  },
  {
    id: "CUST002",
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 8,
    spent: "$750.00",
    lastOrder: "2024-01-02",
    status: "Active",
  },
  {
    id: "CUST003",
    name: "Bob Johnson",
    email: "bob@example.com",
    orders: 3,
    spent: "$250.00",
    lastOrder: "2024-01-03",
    status: "Inactive",
  },
  {
    id: "CUST004",
    name: "Alice Brown",
    email: "alice@example.com",
    orders: 20,
    spent: "$2,100.00",
    lastOrder: "2024-01-04",
    status: "Active",
  },
  {
    id: "CUST005",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    orders: 12,
    spent: "$980.00",
    lastOrder: "2024-01-05",
    status: "Active",
  },
]

export default function CustomersPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add Customer
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>All Customers</CardTitle>
            <CardDescription>
              A list of all customers including their details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-8" />
              </div>
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Last Order</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.spent}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        customer.status === "Active" ? "bg-green-50 text-green-800" : "bg-gray-50 text-gray-800"
                      }`}>
                        {customer.status}
                      </span>
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


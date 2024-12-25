"use client"

import { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { NewOrderForm } from "@/components/NewOrderForm"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { sampleOrders } from '@/lib/sampleData';

export default function OrdersPage() {
  const [orders, setOrders] = useState(sampleOrders);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/orders')
  //       const data = await response.json()
  //       setOrders(data)
  //     } catch (error) {
  //       console.error('Error fetching orders:', error)
  //     }
  //   }

  //   fetchOrders()
  // }, [])

  return (
    <div className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create Order
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Order</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new order.
                </DialogDescription>
              </DialogHeader>
              <NewOrderForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-4">
        {orders.length === 0 ? (
          <p>Loading orders...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id}>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}


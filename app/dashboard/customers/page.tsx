"use client"

import { useState, useEffect } from 'react'
import { Plus, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewCustomerForm } from "@/components/NewCustomerForm"
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
import { sampleCustomers } from '@/lib/sampleData';

export default function CustomersPage() {
  const [customers, setCustomers] = useState(sampleCustomers);

  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/customers')
  //       const data = await response.json()
  //       setCustomers(data)
  //     } catch (error) {
  //       console.error('Error fetching customers:', error)
  //     }
  //   }

  //   fetchCustomers()
  // }, [])

  return (
    <div className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Customer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
                <DialogDescription>
                  Fill in the details to add a new customer to your database.
                </DialogDescription>
              </DialogHeader>
              <NewCustomerForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search customers..." className="pl-8" />
          </div>
        </div>
        {customers.length === 0 ? (
          <p>Loading customers...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer._id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.orders?.length || 0}</TableCell>
                  <TableCell>${customer.totalSpent?.toFixed(2) || '0.00'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}


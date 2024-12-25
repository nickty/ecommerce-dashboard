"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NewOrderForm() {
  const router = useRouter()
  const [customers, setCustomers] = useState([])
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    customerId: '',
    items: [{ productId: '', quantity: 1 }],
  })

  useEffect(() => {
    const fetchCustomersAndProducts = async () => {
      try {
        const [customersResponse, productsResponse] = await Promise.all([
          fetch('http://localhost:5000/api/customers'),
          fetch('http://localhost:5000/api/products')
        ])
        const customersData = await customersResponse.json()
        const productsData = await productsResponse.json()
        setCustomers(customersData)
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchCustomersAndProducts()
  }, [])

  const handleCustomerChange = (value: string) => {
    setFormData({
      ...formData,
      customerId: value
    })
  }

  const handleProductChange = (index: number, value: string) => {
    const newItems = [...formData.items]
    newItems[index].productId = value
    setFormData({
      ...formData,
      items: newItems
    })
  }

  const handleQuantityChange = (index: number, value: string) => {
    const newItems = [...formData.items]
    newItems[index].quantity = parseInt(value)
    setFormData({
      ...formData,
      items: newItems
    })
  }

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { productId: '', quantity: 1 }]
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/dashboard/orders')
        router.refresh()
      } else {
        console.error('Failed to create order')
      }
    } catch (error) {
      console.error('Error creating order:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="customer">Customer</Label>
        <Select onValueChange={handleCustomerChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a customer" />
          </SelectTrigger>
          <SelectContent>
            {customers.map((customer) => (
              <SelectItem key={customer._id} value={customer._id}>{customer.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {formData.items.map((item, index) => (
        <div key={index} className="space-y-2">
          <Label>Product {index + 1}</Label>
          <Select onValueChange={(value) => handleProductChange(index, value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product._id} value={product._id}>{product.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Quantity"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
          />
        </div>
      ))}
      <Button type="button" onClick={addItem}>Add Another Product</Button>
      <Button type="submit">Create Order</Button>
    </form>
  )
}


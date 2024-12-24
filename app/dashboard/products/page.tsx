import { Plus, Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$299.99",
    stock: 45,
    category: "Electronics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: "$49.99",
    stock: 80,
    category: "Electronics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "$159.99",
    stock: 30,
    category: "Electronics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "4K Monitor",
    price: "$699.99",
    stock: 15,
    category: "Electronics",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "$39.99",
    stock: 100,
    category: "Accessories",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: "$79.99",
    stock: 60,
    category: "Accessories",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-8" />
          </div>
          <Button variant="outline">Categories</Button>
          <Button variant="outline">Price Range</Button>
          <Button variant="outline">Stock Status</Button>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold">{product.price}</span>
                    <span className="text-sm text-muted-foreground">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


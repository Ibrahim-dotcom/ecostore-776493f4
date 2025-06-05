
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Plus, Pencil, Trash, Package, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types/product';
import { toast } from '@/hooks/use-toast';

const Admin = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    originalPrice: '',
    category: '',
    stock: '',
    image: '',
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      originalPrice: '',
      category: '',
      stock: '',
      image: '',
    });
  };

  const handleAddProduct = () => {
    if (!formData.name || !formData.price || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : undefined,
      category: formData.category,
      stock: parseInt(formData.stock) || 0,
      image: formData.image || '/placeholder.svg',
      rating: 0,
      reviewCount: 0,
    };

    setProducts([...products, newProduct]);
    setIsAddDialogOpen(false);
    resetForm();
    
    toast({
      title: "Success",
      description: "Product added successfully",
    });
  };

  const handleEditProduct = () => {
    if (!editingProduct || !formData.name || !formData.price || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const updatedProduct: Product = {
      ...editingProduct,
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : undefined,
      category: formData.category,
      stock: parseInt(formData.stock) || 0,
      image: formData.image || '/placeholder.svg',
    };

    setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
    setEditingProduct(null);
    resetForm();
    
    toast({
      title: "Success",
      description: "Product updated successfully",
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Success",
      description: "Product deleted successfully",
    });
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      category: product.category,
      stock: product.stock.toString(),
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage your products, orders, and store settings
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
              <p className="text-xs text-muted-foreground">
                Active products in store
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {products.filter(p => p.stock < 10).length}
              </div>
              <p className="text-xs text-muted-foreground">
                Items with less than 10 in stock
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(products.map(p => p.category)).size}
              </div>
              <p className="text-xs text-muted-foreground">
                Product categories
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>Add, edit, or remove products from your store</CardDescription>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => { resetForm(); setEditingProduct(null); }}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                      Enter the details for your new product.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Product Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter product name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Enter product description"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="price">Price *</Label>
                        <Input
                          id="price"
                          type="number"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: e.target.value})}
                          placeholder="0.00"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="originalPrice">Original Price</Label>
                        <Input
                          id="originalPrice"
                          type="number"
                          step="0.01"
                          value={formData.originalPrice}
                          onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Electronics">Electronics</SelectItem>
                          <SelectItem value="Clothing">Clothing</SelectItem>
                          <SelectItem value="Home">Home</SelectItem>
                          <SelectItem value="Sports">Sports</SelectItem>
                          <SelectItem value="Beauty">Beauty</SelectItem>
                          <SelectItem value="Books">Books</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input
                        id="stock"
                        type="number"
                        value={formData.stock}
                        onChange={(e) => setFormData({...formData, stock: e.target.value})}
                        placeholder="0"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="image">Image URL</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                        placeholder="/placeholder.svg"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleAddProduct}>Add Product</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{product.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{product.category}</Badge>
                      <span className="text-sm">Stock: {product.stock}</span>
                      {product.stock < 10 && (
                        <Badge variant="destructive">Low Stock</Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${product.price}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => openEditDialog(product)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Product</DialogTitle>
                          <DialogDescription>
                            Update the product details.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
                          <div className="grid gap-2">
                            <Label htmlFor="edit-name">Product Name *</Label>
                            <Input
                              id="edit-name"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Enter product name"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-description">Description</Label>
                            <Textarea
                              id="edit-description"
                              value={formData.description}
                              onChange={(e) => setFormData({...formData, description: e.target.value})}
                              placeholder="Enter product description"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="edit-price">Price *</Label>
                              <Input
                                id="edit-price"
                                type="number"
                                step="0.01"
                                value={formData.price}
                                onChange={(e) => setFormData({...formData, price: e.target.value})}
                                placeholder="0.00"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-originalPrice">Original Price</Label>
                              <Input
                                id="edit-originalPrice"
                                type="number"
                                step="0.01"
                                value={formData.originalPrice}
                                onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                                placeholder="0.00"
                              />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-category">Category *</Label>
                            <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Electronics">Electronics</SelectItem>
                                <SelectItem value="Clothing">Clothing</SelectItem>
                                <SelectItem value="Home">Home</SelectItem>
                                <SelectItem value="Sports">Sports</SelectItem>
                                <SelectItem value="Beauty">Beauty</SelectItem>
                                <SelectItem value="Books">Books</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-stock">Stock Quantity</Label>
                            <Input
                              id="edit-stock"
                              type="number"
                              value={formData.stock}
                              onChange={(e) => setFormData({...formData, stock: e.target.value})}
                              placeholder="0"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-image">Image URL</Label>
                            <Input
                              id="edit-image"
                              value={formData.image}
                              onChange={(e) => setFormData({...formData, image: e.target.value})}
                              placeholder="/placeholder.svg"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button onClick={handleEditProduct}>Update Product</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;


import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 299.99,
    items: [
      { name: 'Wireless Headphones', quantity: 1, price: 199.99 },
      { name: 'Phone Case', quantity: 2, price: 50.00 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    total: 159.50,
    items: [
      { name: 'Smart Watch', quantity: 1, price: 159.50 }
    ]
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'pending',
    total: 89.99,
    items: [
      { name: 'Desk Lamp', quantity: 1, price: 89.99 }
    ]
  }
];

const Orders = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (orderId: string) => {
    // For now, just show an alert. In real app, navigate to order detail page
    alert(`Viewing details for ${orderId}`);
  };

  const handleReorder = (order: any) => {
    // Add order items back to cart and navigate to products
    alert(`Reordering items from ${order.id}`);
    navigate('/products');
  };

  const handleTrackPackage = (orderId: string) => {
    // For now, just show an alert. In real app, show tracking info
    alert(`Tracking package for ${orderId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Your Orders</h1>
          <p className="text-muted-foreground mt-2">
            Track and manage your recent orders
          </p>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Order {order.id}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Placed on {order.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                    <p className="text-lg font-bold mt-2">${order.total}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" onClick={() => handleViewDetails(order.id)}>
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {order.status === 'delivered' && (
                    <Button variant="outline" size="sm" onClick={() => handleReorder(order)}>
                      Reorder
                    </Button>
                  )}
                  {order.status === 'shipped' && (
                    <Button variant="outline" size="sm" onClick={() => handleTrackPackage(order.id)}>
                      Track Package
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockOrders.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-4">Start shopping to see your orders here</p>
            <Button onClick={() => navigate('/products')}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Orders;


import React from 'react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              EcoStore
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for premium products and exceptional shopping experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Categories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 EcoStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

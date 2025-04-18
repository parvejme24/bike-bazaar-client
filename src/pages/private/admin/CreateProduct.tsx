import { useState } from "react";
import { Button, Input, Label, Textarea } from "keep-react";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    model: "",
    category: "",
    price: "",
    stock: "",
    photoUrl: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Data:", product);
    // TODO: Send product data to backend here
  };

  return (
    <div>
      <div className="container mx-auto max-w-7xl md:px-0 flex justify-center items-center min-h-screen">
        <div className="max-w-[600px] mx-auto ">
          <h2 className="text-center text-2xl font-bold">Create A Product</h2>
          <form onSubmit={handleSubmit} className="space-y-3 mt-6">
            {/* Product Name */}
            <fieldset className="max-w-full space-y-1">
              <Label htmlFor="productName">Enter Product Name</Label>
              <Input
                id="productName"
                placeholder="e.g., Yamaha R15"
                type="text"
                value={product.productName}
                onChange={handleChange}
              />
            </fieldset>

            <div className="grid grid-cols-2 gap-4">
              {/* Brand */}
              <fieldset className="max-w-full space-y-1">
                <Label htmlFor="brand">Enter Product Brand</Label>
                <Input
                  id="brand"
                  placeholder="e.g., Yamaha"
                  type="text"
                  value={product.brand}
                  onChange={handleChange}
                />
              </fieldset>

              {/* Model */}
              <fieldset className="max-w-full space-y-1">
                <Label htmlFor="model">Enter Product Model</Label>
                <Input
                  id="model"
                  placeholder="e.g., R15 V4"
                  type="text"
                  value={product.model}
                  onChange={handleChange}
                />
              </fieldset>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Category */}
              <fieldset className="max-w-full space-y-1 col-span-2 md:col-span-1">
                <Label htmlFor="category">Product Category</Label>
                <Input
                  id="category"
                  placeholder="e.g., Sports Bike"
                  type="text"
                  value={product.category}
                  onChange={handleChange}
                />
              </fieldset>

              {/* Price */}
              <fieldset className="max-w-full space-y-1">
                <Label htmlFor="price">Product Price</Label>
                <Input
                  id="price"
                  placeholder="e.g., 150000"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                />
              </fieldset>

              {/* Stock */}
              <fieldset className="max-w-full space-y-1">
                <Label htmlFor="stock">Product Stock</Label>
                <Input
                  id="stock"
                  placeholder="e.g., 10"
                  type="number"
                  value={product.stock}
                  onChange={handleChange}
                />
              </fieldset>
            </div>

            {/* Photo URL */}
            <fieldset className="max-w-full space-y-1">
              <Label htmlFor="photoUrl">Enter Product Image URL</Label>
              <Input
                id="photoUrl"
                placeholder="e.g., https://example.com/image.jpg"
                type="text"
                value={product.photoUrl}
                onChange={handleChange}
              />
            </fieldset>

            {/* Description */}
            <fieldset className="max-w-full space-y-1">
              <Label htmlFor="description">Enter Product Description</Label>
              <Textarea
                id="description"
                placeholder="Write detailed description here..."
                rows={8}
                value={product.description}
                onChange={handleChange}
              />
            </fieldset>

            <Button color="primary" className="w-full" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

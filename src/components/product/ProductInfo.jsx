import Counter from "@/components/product/Counter";
import useCounterStore from "@/store/counterStore";
import useCartStore from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { product } from "@/data/data";

function ProductInfo() {
  const count = useCounterStore((state) => state.count);
  const reset = useCounterStore((state) => state.reset);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      unitPrice: product.discountPrice,
      quantity: count,
      thumbnail: product.thumbnail,
    });
    reset();
  };

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0 space-y-6 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-label text-muted-foreground">{product.company}</p>
          <h1 className="text-heading-1">{product.title}</h1>
        </div>
        <p className="text-body text-muted-foreground">{product.description}</p>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-heading-2 text-foreground">
                ${product.discountPrice.toFixed(2)}
              </h2>
              <span className="text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            </div>
            <Badge className="bg-foreground text-body-bold text-background px-2 py-1">
              {product.discountPercentage}%
            </Badge>
          </div>

          <Separator />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Counter />
            <Button
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductInfo;

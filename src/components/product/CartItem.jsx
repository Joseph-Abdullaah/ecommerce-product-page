import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/store/cartStore";

function CartItem() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const itemCount = useCartStore((state) => state.itemCount());
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (items.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-6">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-12 w-12 rounded-md"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground">
              ${item.unitPrice.toFixed(2)} x {item.quantity}{" "}
              <span className="font-bold text-foreground">
                ${(item.unitPrice * item.quantity).toFixed(2)}
              </span>
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => removeItem(item.id)}
          >
            🗑
          </Button>
        </div>
      ))}
      <Separator />
      <div className="flex items-center justify-between text-sm font-bold">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
        Checkout
      </Button>
      <p className="text-xs text-muted-foreground">
        {itemCount} item{itemCount !== 1 ? "s" : ""} in cart
      </p>
    </div>
  );
}

export default CartItem;

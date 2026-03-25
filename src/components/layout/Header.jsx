import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
} from "@/components/ui/popover";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/images/logo.svg";
import cart from "@/assets/images/icon-cart.svg";
import avatar from "@/assets/images/image-avatar.png";
import menu from "@/assets/images/icon-menu.svg";
import CartItem from "../product/CartItem";
import useCartStore from "@/store/cartStore";

export default function Header() {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  const itemCount = useCartStore((state) => state.itemCount());

  return (
    <header className="bg-background px-6 lg:px-41.25 md:px-20">
      <div className="max-w-277.5 w-full mx-auto flex h-27.75 items-center justify-between md:border-b md:border-border">
        {/* Left Section: Logo & Nav */}
        <div className="flex h-full items-center gap-14">
          <div className="flex gap-4">
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <img src={menu} alt="hamberger-menu" />
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="flex flex-col-reverse justify-end p-6 md:px-20 md:py-12 gap-14 w-62.5 md:w-75.25"
                >
                  <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-lg font-bold font-sans hover:text-muted-foreground"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden h-full items-center gap-8 text-muted-foreground lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="flex h-full items-center border-b-4 border-transparent text-body-sm hover:border-primary hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Section: Cart & Avatar */}
        <div className="flex items-center gap-10">
          <Popover aria-label="Cart">
            <PopoverTrigger>
              <div className="relative">
                <img src={cart} alt="cart" />
                {itemCount > 0 ? (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                ) : null}
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverTitle className="font-bold">Cart</PopoverTitle>
              <div className="mt-4 w-full">
                <Separator />
                <CartItem />
              </div>
            </PopoverContent>
          </Popover>

          <img
            src={avatar}
            alt="Avatar"
            className="h-full w-12.5 border-2 border-primary rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

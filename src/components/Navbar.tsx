import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { cartItems } from "../stores/cartStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import logo from "../assets/logo-mab.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const $cartItems = useStore(cartItems);
  const totalItems = Object.values($cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const navLinksLeft = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/catalogo" },
  ];

  const navLinksRight = [
    { name: "Quem somos", href: "/#quem-somos" },
    { name: "Suporte técnico", href: "/suporte" },
  ];

  return (
    <nav className="bg-black text-white w-full sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Trigger & Logo (Mobile Layout) */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black border-r border-white/10 text-white w-[300px]"
            >
              <motion.div
                className="flex flex-col gap-6 mt-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.a
                  href="/"
                  className="flex items-center gap-2 mb-4"
                  onClick={() => setIsOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <img src={logo.src} alt="MAB Logo" className="h-8 w-auto" />
                </motion.a>
                {[...navLinksLeft, ...navLinksRight].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-gray-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Button
                    className="bg-white text-black hover:bg-gray-200 rounded-full w-full mt-4"
                    asChild
                  >
                    <a href="/contato">Entrar em contato</a>
                  </Button>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>

          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={logo.src} alt="MAB Logo" className="h-8 w-auto" />
          </a>

          <div className="flex items-center justify-end w-10">
            <a
              href="/carrinho"
              className="relative text-white hover:text-gray-300"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 rounded-full text-[10px]"
                >
                  {totalItems}
                </Badge>
              )}
            </a>
          </div>
        </div>

        {/* Desktop Left Links */}
        <div className="hidden md:flex flex-1 items-center justify-start gap-12">
          {navLinksLeft.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo (Centered Desktop) */}
        <div className="hidden md:flex flex-none justify-center">
          <a href="/">
            <img src={logo.src} alt="MAB Logo" className="h-8 md:h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Right Links & CTA */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-12">
          {navLinksRight.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              {link.name}
            </a>
          ))}

          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:text-gray-300"
            asChild
          >
            <a href="/carrinho" aria-label="View cart">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 rounded-full"
                >
                  {totalItems}
                </Badge>
              )}
            </a>
          </Button>

          <Button
            className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-medium"
            asChild
          >
            <a href="/contato">Entrar em contato</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

import React, { useState, useMemo } from "react";
import FilterBar from "./FilterBar";
import { addCartItem } from "../stores/cartStore";
import type { Product } from "../shared/data.const";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Check, Package, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products],
  );

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = !filter || p.category === filter;
      const matchesSearch =
        !searchTerm ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.subCategory?.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, filter, searchTerm]);

  const handleAdd = (product: Product) => {
    addCartItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-between">
        <div className="w-full md:max-w-md relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#322783] transition-colors" />
          <Input
            placeholder="Buscar por nome, marca ou categoria..."
            className="pl-11 h-12 rounded-2xl border-gray-100 bg-white shadow-sm focus:border-[#322783] transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <FilterBar
          categories={categories}
          activeFilter={filter}
          onFilterChange={setFilter}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden flex flex-col border-gray-100 hover:border-[#322783]/20 hover:shadow-xl hover:shadow-[#322783]/5 transition-all duration-500 rounded-3xl"
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 relative">
              {product.img ? (
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-200">
                  <Package size={48} strokeWidth={1} />
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="bg-white/80 backdrop-blur-md text-[#322783] text-[10px] font-bold px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                  {product.brand}
                </span>
              </div>
            </div>

            <CardHeader className="space-y-1 pb-4">
              <CardDescription className="text-[#a855f7] font-bold text-[10px] uppercase tracking-widest">
                {product.subCategory || product.category}
              </CardDescription>
              <CardTitle className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#322783] transition-colors">
                {product.name}
              </CardTitle>
            </CardHeader>

            <CardFooter className="mt-auto pt-0 pb-6 pr-6 pl-6">
              <Button
                className={`w-full h-12 rounded-2xl font-bold transition-all duration-300 ${
                  addedId === product.id
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-[#322783] hover:bg-[#2a216e] text-white"
                }`}
                onClick={() => handleAdd(product)}
              >
                <AnimatePresence mode="wait">
                  {addedId === product.id ? (
                    <motion.div
                      key="added"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={18} />
                      Adicionado
                    </motion.div>
                  ) : (
                    <motion.div
                      key="add"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Adicionar ao Orçamento
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <Search size={32} />
          </div>
          <p className="text-gray-500 font-medium">
            Nenhum produto encontrado para sua busca.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setFilter("");
            }}
            className="mt-4 text-[#322783] font-bold hover:underline"
          >
            Limpar todos os filtros
          </button>
        </div>
      )}
    </div>
  );
}

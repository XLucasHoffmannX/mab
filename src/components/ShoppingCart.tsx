import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  cartItems,
  removeCartItem,
  updateCartItemQuantity,
  clearCart,
  type CartItem,
} from "../stores/cartStore";
import { Button } from "@/components/ui/button";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingCart as CartIcon,
  ArrowRight,
  Send,
  Building2,
  MessageCircle,
  Package,
  X,
  Maximize2,
  ChevronLeft,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const ui = {
  section: "relative py-12 px-4 min-h-[60vh]",
  container: "container mx-auto max-w-5xl relative z-10",
  card: "bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden",
  input:
    "bg-gray-50 border-gray-100 focus:border-[#7c3aed] focus:ring-[#7c3aed]/10",
  badge:
    "bg-[#7c3aed]/5 text-[#7c3aed] px-3 py-1 rounded-full text-xs font-bold uppercase",
};

export default function ShoppingCart() {
  const $cartItems = useStore(cartItems);
  const items = Object.values($cartItems);
  const [step, setStep] = useState<"list" | "checkout">("list");
  const [form, setForm] = useState({ company: "", whatsapp: "" });
  const [zoomItem, setZoomItem] = useState<CartItem | null>(null);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    const message =
      `*Novo Pedido - MAB Fortuna*%0A%0A` +
      `*Empresa:* ${form.company}%0A` +
      `*WhatsApp:* ${form.whatsapp}%0A%0A` +
      `*Itens:*%0A` +
      items
        .map((item) => `- ${item.quantity}x ${item.name} (${item.brand})`)
        .join("%0A") +
      `%0A%0A_Enviado via Catálogo Online_`;

    window.open(`https://wa.me/5543999740457?text=${message}`, "_blank");
    clearCart();
    setStep("list");
  };

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200"
      >
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
          <CartIcon size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Seu orçamento está vazio
        </h2>
        <p className="text-gray-500 mb-8 max-w-xs mx-auto">
          Adicione produtos do catálogo para solicitar um orçamento técnico.
        </p>
        <Button
          asChild
          className="rounded-full px-8 bg-[#322783] hover:bg-[#2a216e]"
        >
          <a href="/catalogo">Ver produtos</a>
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8 pb-20 overflow-visible">
      {/* Mobile Back Facilitator - Floating */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <Button
          variant="outline"
          asChild
          className="rounded-full h-12 px-6 bg-white/80 backdrop-blur-md border-gray-100 shadow-lg text-gray-700 font-bold flex items-center gap-2 active:scale-95 transition-all"
        >
          <a href="/catalogo">
            <ChevronLeft size={20} className="text-[#322783]" />
            Catálogo
          </a>
        </Button>
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed]">
            <Package size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Itens do Orçamento
            </h2>
            <p className="text-xs text-gray-500">
              {totalItems}{" "}
              {totalItems === 1 ? "item selecionado" : "itens selecionados"}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-500 hover:bg-red-50 rounded-full"
          onClick={clearCart}
        >
          Limpar tudo
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LIST SECTION */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`${ui.card} relative flex items-center gap-4 p-4 pr-6 group/item transition-all hover:border-[#7c3aed]/20`}
              >
                <div
                  className="w-24 h-24 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden shrink-0 cursor-zoom-in relative group"
                  onClick={() => setZoomItem(item)}
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <Package className="text-gray-200" size={32} />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </div>

                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => setZoomItem(item)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={ui.badge}>{item.brand}</span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 truncate">
                    {item.name}
                  </h3>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-1.5 bg-gray-50 rounded-full p-1 border border-gray-100">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-white border border-transparent hover:border-gray-200"
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus size={12} />
                    </Button>
                    <span className="w-6 text-center text-sm font-bold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-full hover:bg-white border border-transparent hover:border-gray-200"
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus size={12} />
                    </Button>
                  </div>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SIDEBAR: CHECKOUT */}
        <div className="lg:sticky lg:top-32">
          <motion.div
            className={`${ui.card} p-8 border-2 ${step === "checkout" ? "border-[#7c3aed]/20" : "border-gray-100"}`}
            animate={{ scale: step === "checkout" ? 1.02 : 1 }}
          >
            <AnimatePresence mode="wait">
              {step === "list" ? (
                <motion.div
                  key="list-cta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Resumo</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Ao finalizar, você será redirecionado para o WhatsApp com
                      a sua lista de interesses.
                    </p>
                  </div>
                  <Button
                    className="w-full h-14 rounded-2xl bg-[#322783] hover:bg-[#2a216e] text-lg font-bold group"
                    onClick={() => setStep("checkout")}
                  >
                    Finalizar Pedido
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="checkout-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      Informações
                    </h3>
                    <p className="text-xs text-gray-500 uppercase font-black tracking-widest">
                      Menos fricção, mais agilidade
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-600 flex items-center gap-2">
                        <Building2 size={12} className="text-[#7c3aed]" />
                        NOME DA EMPRESA
                      </label>
                      <Input
                        placeholder="Ex: Confecções Estrela"
                        className={ui.input}
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-600 flex items-center gap-2">
                        <MessageCircle size={12} className="text-[#7c3aed]" />
                        WHATSAPP
                      </label>
                      <Input
                        placeholder="(00) 00000-0000"
                        className={ui.input}
                        value={form.whatsapp}
                        onChange={(e) =>
                          setForm({ ...form, whatsapp: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                      variant="outline"
                      className="rounded-xl border-gray-100 text-gray-400"
                      onClick={() => setStep("list")}
                    >
                      Voltar
                    </Button>
                    <Button
                      className="rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold"
                      disabled={!form.company || !form.whatsapp}
                      onClick={handleCheckout}
                    >
                      Enviar
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ZOOM MODAL */}
      <AnimatePresence>
        {zoomItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setZoomItem(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setZoomItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="aspect-[4/3] w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                {zoomItem.img ? (
                  <img
                    src={zoomItem.img}
                    alt={zoomItem.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Package className="text-gray-200" size={80} />
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className={ui.badge}>{zoomItem.brand}</span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                    {zoomItem.category}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">
                  {zoomItem.name}
                </h2>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <Button
                    className="flex-1 bg-[#322783] hover:bg-[#2a216e] h-12 rounded-xl text-lg font-bold"
                    onClick={() => {
                      updateCartItemQuantity(
                        zoomItem.id,
                        zoomItem.quantity + 1,
                      );
                      setZoomItem(null);
                    }}
                  >
                    Aumentar Quantidade
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 w-12 rounded-xl border-gray-100 text-gray-400 p-0"
                    onClick={() => setZoomItem(null)}
                  >
                    Voltar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

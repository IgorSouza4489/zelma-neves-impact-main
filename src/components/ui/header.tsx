import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Definindo props (se quiser links dinâmicos depois)
interface HeaderProps {
  links?: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ 
  links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#areas", label: "Áreas" },
    { href: "#missao", label: "Missão" },
    { href: "#contato", label: "Contato" }
  ] 
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Nome */}
        <div className="flex items-center space-x-3">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/IgorSouza4489/zelma-neves-impact-main/39892b8f5f7e7e479cd8909b64ccd6b28603e5ea/src/461041756_2670755179774872_3853340689919885439_n.jpg"
              alt="Instituto Zelma Neves"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Instituto Zelma Neves</h1>
            <p className="text-sm text-muted-foreground">
              Educação • Esporte • Saúde • Cultura
            </p>
          </div>
        </div>

        {/* Links Desktop */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t px-4 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-foreground hover:text-primary"
              onClick={() => setMenuOpen(false)} // fecha ao clicar
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Instituto Zelma Neves
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transformando vidas através da Educação, Esporte, Saúde e Cultura
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <a href="https://www.instagram.com/institutozelmaneves/" target="_blank" rel="noopener noreferrer">
              Conheça nosso trabalho
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

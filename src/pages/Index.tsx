import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Heart, 
  Trophy, 
  Palette, 
  Users, 
  Target,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">IZN</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Instituto Zelma Neves</h1>
              <p className="text-sm text-muted-foreground">Educação • Esporte • Saúde • Cultura</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-foreground hover:text-primary transition-all duration-300 story-link">Sobre</a>
            <a href="#areas" className="text-foreground hover:text-primary transition-all duration-300 story-link">Áreas</a>
            <a href="#missao" className="text-foreground hover:text-primary transition-all duration-300 story-link">Missão</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-all duration-300 story-link">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Sobre o Instituto</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              O Instituto Zelma Neves é uma organização dedicada ao desenvolvimento integral da comunidade, 
              atuando nas áreas fundamentais da educação, esporte, saúde e cultura. Nossa missão é criar 
              oportunidades e transformar vidas através de programas inovadores e inclusivos.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    Nossa Visão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ser referência no desenvolvimento social, promovendo cidadania e qualidade de vida 
                    através de ações transformadoras em nossa comunidade.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    Nossos Valores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compromisso, transparência, inclusão e excelência guiam todas as nossas ações, 
                    sempre priorizando o impacto positivo na vida das pessoas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section id="areas" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Nossas Áreas de Atuação</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos programas integrados que abordam as necessidades essenciais da comunidade
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Educação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Programas educacionais inovadores, reforço escolar, alfabetização de adultos e capacitação profissional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Trophy className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Esporte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modalidades esportivas diversas, competições, formação de atletas e promoção da atividade física.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-red-600">Saúde</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Atendimento médico, campanhas preventivas, educação em saúde e bem-estar da comunidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Cultura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Arte, música, dança, teatro e preservação das tradições culturais locais e brasileiras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="missao" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Nossa Missão</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Promover o desenvolvimento humano integral através de ações educativas, esportivas, 
              de saúde e culturais, contribuindo para a formação de cidadãos conscientes e 
              participativos na construção de uma sociedade mais justa e solidária.
            </p>
            <div className="bg-card rounded-lg p-8 border shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Nosso Compromisso</h3>
              <p className="text-muted-foreground">
                Cada ação do Instituto Zelma Neves é pautada no respeito à dignidade humana, 
                na valorização da diversidade e no compromisso com o desenvolvimento sustentável 
                de nossa comunidade. Acreditamos que juntos podemos construir um futuro melhor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Entre em Contato</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    contato@institutozelmaneves.org.br
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Telefone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    (11) 9999-9999
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Endereço</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Baixada Fluminense - RJ<br />
                    Brasil
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IZN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Instituto Zelma Neves</h3>
                <p className="text-white/80 text-sm">Educação • Esporte • Saúde • Cultura</p>
              </div>
            </div>
            <Separator className="bg-white/20 mb-6" />
            <p className="text-white/80 mb-4">
              Transformando vidas e construindo um futuro melhor para nossa comunidade.
            </p>
            <p className="text-white/60 text-sm">
              © 2024 Instituto Zelma Neves. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

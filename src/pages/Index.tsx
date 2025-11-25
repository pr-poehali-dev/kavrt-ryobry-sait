import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">КРАФТ РЁБРА</h1>
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Меню', 'О нас', 'Галерея', 'Акции', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => scrollToSection('бронирование')} 
                className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Забронировать
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-foreground"
                aria-label="Toggle menu"
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
              </button>
            </div>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {['Главная', 'Меню', 'О нас', 'Галерея', 'Акции', 'Отзывы', 'Контакты', 'Бронирование'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="главная" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
              КРАФТ РЁБРА
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Авторская кухня с фирменными рецептами рёбер и крафтовыми напитками
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('меню')}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              >
                Посмотреть меню
              </Button>
              <Button 
                onClick={() => scrollToSection('бронирование')}
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              >
                Забронировать стол
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

      <section id="меню" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">МЕНЮ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in">Авторские рецепты и крафтовые напитки</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-background border-border hover:border-primary hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Beef" size={32} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Фирменные рёбра BBQ</h3>
                    <p className="text-muted-foreground mb-3">Свиные рёбра в авторском соусе, томлёные 6 часов</p>
                    <p className="text-2xl font-bold text-primary">890 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary hover:scale-105 transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Beef" size={32} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Говяжьи рёбра гриль</h3>
                    <p className="text-muted-foreground mb-3">Маринованные рёбра с дымком на углях</p>
                    <p className="text-2xl font-bold text-primary">1190 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Beer" size={32} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Крафтовое пиво IPA</h3>
                    <p className="text-muted-foreground mb-3">Авторский напиток от местной пивоварни</p>
                    <p className="text-2xl font-bold text-primary">350 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Wine" size={32} className="text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Авторские коктейли</h3>
                    <p className="text-muted-foreground mb-3">Уникальные рецепты от нашего бармена</p>
                    <p className="text-2xl font-bold text-primary">450 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 text-foreground animate-fade-in">О НАС</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <img 
                  src="https://cdn.poehali.dev/projects/1de6d29e-877b-4da3-8afd-7bb01062b596/files/5c5dbab8-668c-4c59-afa8-bc2c029eaa01.jpg" 
                  alt="Интерьер Крафт Рёбра"
                  className="w-full aspect-square object-cover rounded-sm shadow-2xl hover:shadow-primary/20 transition-shadow duration-500"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Крафт Рёбра — это место, где сочетаются брутальная атмосфера лофта и изысканная авторская кухня. 
                  Мы создали пространство для тех, кто ценит качество и аутентичность.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наши фирменные рёбра готовятся по уникальным рецептам, а крафтовые напитки дополняют вкусовую палитру 
                  каждого блюда. Каждый визит к нам — это гастрономическое путешествие.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center group cursor-pointer">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">50+</div>
                    <div className="text-sm text-muted-foreground">Блюд в меню</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">1000+</div>
                    <div className="text-sm text-muted-foreground">Гостей</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="галерея" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">ГАЛЕРЕЯ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in">Атмосфера нашего заведения</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/1de6d29e-877b-4da3-8afd-7bb01062b596/files/1b4e074b-fefb-4f47-a614-4c1e4e2fc24b.jpg"
              alt="Фирменные рёбра"
              className="aspect-square object-cover rounded-sm hover:scale-110 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
            />
            <img 
              src="https://cdn.poehali.dev/projects/1de6d29e-877b-4da3-8afd-7bb01062b596/files/dc0dae8b-18b8-4695-9e01-f1f1a80234f6.jpg"
              alt="Крафтовые напитки"
              className="aspect-square object-cover rounded-sm hover:scale-110 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
            />
            <img 
              src="https://cdn.poehali.dev/projects/1de6d29e-877b-4da3-8afd-7bb01062b596/files/5c5dbab8-668c-4c59-afa8-bc2c029eaa01.jpg"
              alt="Интерьер бар-кафе"
              className="aspect-square object-cover rounded-sm hover:scale-110 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in"
            />
            <div className="aspect-square bg-gradient-to-br from-secondary/30 to-primary/20 rounded-sm hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in flex items-center justify-center">
              <Icon name="Camera" size={64} className="text-muted-foreground/40" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/30 rounded-sm hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in flex items-center justify-center">
              <Icon name="Camera" size={64} className="text-muted-foreground/40" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-secondary/30 to-primary/20 rounded-sm hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in flex items-center justify-center">
              <Icon name="Camera" size={64} className="text-muted-foreground/40" />
            </div>
          </div>
        </div>
      </section>

      <section id="акции" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">АКЦИИ</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-slide-in-left">
              <CardContent className="p-8">
                <Icon name="Percent" size={48} className="text-primary mb-4 animate-float" />
                <h3 className="text-3xl font-bold mb-4">Счастливые часы</h3>
                <p className="text-muted-foreground mb-4 text-lg">
                  С 15:00 до 18:00 скидка 20% на все крафтовые напитки
                </p>
                <p className="text-sm text-muted-foreground">Будни</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/20 to-primary/20 border-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-scale-in">
              <CardContent className="p-8">
                <Icon name="Gift" size={48} className="text-primary mb-4 animate-float" />
                <h3 className="text-3xl font-bold mb-4">Комбо-сет</h3>
                <p className="text-muted-foreground mb-4 text-lg">
                  Рёбра + гарнир + напиток со скидкой 15%
                </p>
                <p className="text-sm text-muted-foreground">Каждый день</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">ОТЗЫВЫ</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Алексей М.', text: 'Невероятные рёбра! Лучшее, что я пробовал в городе. Атмосфера просто огонь!' },
              { name: 'Мария К.', text: 'Отличное место для встреч с друзьями. Крафтовое пиво превосходное, а рёбра тают во рту.' },
              { name: 'Дмитрий П.', text: 'Брутальный интерьер и изысканная кухня — идеальное сочетание. Обязательно вернёмся!' },
            ].map((review, idx) => (
              <Card key={idx} className="bg-background border-border hover:border-primary hover:shadow-xl transition-all duration-500 animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                  <p className="font-semibold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="бронирование" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">БРОНИРОВАНИЕ</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in">Забронируйте столик прямо сейчас</p>
            
            <Card className="bg-card border-border shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Дата</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Количество гостей</label>
                      <Input
                        type="number"
                        placeholder="2"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                  >
                    Забронировать стол
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">КОНТАКТЫ</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, Пресненская наб., 12</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Вс: 12:00 - 02:00</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Как нас найти</h3>
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-xl">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.538296%2C55.748341&z=16&l=map&pt=37.538296,55.748341,pm2rdm" 
                width="100%" 
                height="400" 
                frameBorder="0"
                className="w-full"
                title="Карта расположения Крафт Рёбра"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">© 2024 Крафт Рёбра. Все права защищены.</p>
            <div className="flex gap-6">
              <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
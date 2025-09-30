import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-orbitron font-black text-primary mb-6">Условия использования</h1>
          <p className="text-foreground/80 font-rajdhani mb-8">
            Эти Условия использования регулируют доступ и использование сайта и услуг QuirkyNest.
          </p>

          <div className="space-y-6 font-rajdhani text-foreground/80">
            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">1. Принятие условий</h2>
              <p>
                Используя сайт, вы соглашаетесь с данными условиями. Если вы не согласны, покиньте сайт.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">2. Услуги</h2>
              <p>
                Мы предоставляем услуги по веб-разработке, дизайну, мобильным приложениям, брендингу и маркетингу.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">3. Ответственность</h2>
              <p>
                Сайт предоставляется «как есть». Мы стремимся к бесперебойной работе, но не гарантируем отсутствие ошибок.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">4. Связь</h2>
              <p>
                По вопросам условий обращайтесь: <a className="text-primary" href="mailto:Irisarts1@yandex.ru">Irisarts1@yandex.ru</a>
                , телефон <a className="text-primary" href="tel:+79045357052">+7 904 535-70-52</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;



import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-orbitron font-black text-primary mb-6">Политика конфиденциальности</h1>
          <p className="text-foreground/80 font-rajdhani mb-8">
            Настоящая Политика конфиденциальности описывает, как QuirkyNest собирает, использует и
            защищает персональные данные пользователей.
          </p>

          <div className="space-y-6 font-rajdhani text-foreground/80">
            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">1. Сбор данных</h2>
              <p>
                Мы собираем данные, которые вы предоставляете через формы на сайте: имя, номер телефона,
                адрес электронной почты и информацию о проекте.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">2. Использование данных</h2>
              <p>
                Данные используются для связи с вами, подготовки коммерческого предложения и улучшения сервиса.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">3. Передача третьим лицам</h2>
              <p>
                Мы не передаем ваши данные третьим лицам, за исключением случаев, предусмотренных законом.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">4. Хранение и защита</h2>
              <p>
                Мы принимаем разумные меры для защиты данных от несанкционированного доступа.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-orbitron font-bold text-foreground mb-2">5. Контакты</h2>
              <p>
                По вопросам конфиденциальности свяжитесь с нами: <a className="text-primary" href="mailto:Irisarts1@yandex.ru">Irisarts1@yandex.ru</a>
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

export default Privacy;



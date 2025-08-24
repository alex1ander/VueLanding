const Prerenderer = require('@prerenderer/prerenderer');
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer');

const locales = ['ua', 'ru', 'en']; // языки

// Генерируем маршруты только для языков
const prerenderRoutes = locales.map(lang => `/${lang}/`);

const prerenderer = new Prerenderer({
  staticDir: __dirname + '/dist', // папка с билдом
  routes: prerenderRoutes,
  renderer: new PuppeteerRenderer({
    renderAfterDocumentEvent: 'render-event', // ждём, когда Vue полностью загрузится
  }),
});

prerenderer.initialize()
  .then(() => prerenderer.renderRoutes())
  .then(() => {
    console.log('✅ Пререндеринг всех языков завершён!');
    return prerenderer.destroy();
  })
  .catch(err => console.error(err));

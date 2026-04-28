# NIMBUS — лендинг AI-аналитики для SaaS-команд

Лендинг для портфолио. Тёмная тема, gradient-эстетика, SaaS-композиция.

## Стек
- HTML5 + семантические теги
- CSS3: variables, Grid, Flexbox, clamp(), backdrop-filter, mask-image, gradient borders
- Vanilla JS: IntersectionObserver, sticky-nav с blur, smooth-scroll, parallax на hero
- Inline SVG (логотип, иконки фич, дашборд-чарт)
- Google Fonts (Inter + JetBrains Mono)

## Что внутри (7 секций)
1. **Hero** — gradient-заголовок, badge с changelog, два CTA
2. **Trusted by** — лого «клиентов»
3. **Features** — 4 карточки с иконками и фичами
4. **Dashboard preview** — фейковый дашборд (CSS/SVG-мок) — главный wow-блок
5. **Stats** — 4 больших цифры с gradient-числами
6. **Pricing** — 3 тарифа (Starter / Pro / Enterprise) с featured-карточкой
7. **CTA + Footer**

## Запуск локально
```bash
cd nimbus-saas
python3 -m http.server 8000
# открыть http://localhost:8000
```

## Деплой на GitHub Pages
1. Залить файлы в репо
2. Settings → Pages → Source: `main` branch → `/` (root)
3. Доступно по `https://<username>.github.io/<repo>/`

## Что демонстрирует в портфолио
- Современную тёмную SaaS-эстетику
- CSS-only фейковый дашборд (часть, которую сложнее всего сделать)
- Inline SVG графики и иконки
- Gradient borders без хаков (через mask-composite)
- Адаптивность на 3 брейкпоинтах
- Аккуратные hover/reveal-анимации без перебора

---
name: Крутой Сервис
description: Тёплый светлый лендинг сервиса ремонта телефонов во Владимире
colors:
  background: "oklch(98.2% 0.009 82)"
  foreground: "oklch(22% 0.012 82)"
  card: "oklch(99.4% 0.007 82)"
  secondary: "oklch(94.5% 0.012 82)"
  muted-foreground: "oklch(52% 0.018 82)"
  accent: "oklch(62% 0.17 28)"
  accent-foreground: "oklch(99% 0.005 82)"
  border: "oklch(90% 0.014 82)"
typography:
  display:
    fontFamily: "Bitter, Georgia, serif"
    fontWeight: 500
    letterSpacing: "-0.03em"
    lineHeight: 1.1
  body:
    fontFamily: "Golos Text, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
spacing:
  section-y: "4rem"
  section-y-md: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.accent-foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.25rem"
  button-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1.5rem"
---

## Overview

**The Workshop Ledger** — светлая, спокойная витрина мастерской: кремовый фон с лёгким тёплым оттенком, тёмный текст, терракотовый CTA. Ощущение «живого места», не SaaS. Цветовая стратегия: **Restrained** (нейтрали + акцент ≤10% поверхности).

## Colors

| Роль | OKLCH | Назначение |
|------|-------|------------|
| background | `oklch(98.2% 0.009 82)` | Основной фон страницы |
| foreground | `oklch(22% 0.012 82)` | Текст, primary-кнопки |
| card | `oklch(99.4% 0.007 82)` | Карточки, панели |
| accent | `oklch(62% 0.17 28)` | Звонок, ключевые CTA |
| muted-foreground | `oklch(52% 0.018 82)` | Вторичный текст |

Нейтрали тонированы к hue ~82 (тёплый беж). Чистые `#000` / `#fff` не используются.

## Typography

- **Display (h1–h6):** Bitter — уверенный serif, ассоциация с «мастерской» и текстом, не с IT-стартапом.
- **Body / UI:** Golos Text — читаемая кириллица, нейтральный UI.
- Масштаб заголовков: `text-4xl` → `lg:text-6xl` на hero; шаг ≥1.25.
- Body: max ~65ch в абзацах.

## Elevation

Плоская система: разделение секций через `bg-card` / `bg-background` и тонкие `border-border/50`. Тени — точечно на hover карточек (`shadow-md`), без glass/blur.

## Components

- Кнопки: `rounded-full` для CTA, focus ring `ring-[3px]`.
- Секции: `container max-w-6xl px-5 md:px-8 py-16 md:py-24`.
- Accordion FAQ на Radix; калькулятор — пошаговый степпер без модалок.

## Do's and Don'ts

**Do:** терракот только на звонок; чёткая иерархия; reduced motion; skip-link.

**Don't:** hero-metrics блоки; три одинаковые карточки в ряд; backdrop-blur; gradient text; em dash в копирайте.

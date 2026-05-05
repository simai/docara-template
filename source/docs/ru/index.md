---
extends: _core._layouts.documentation
section: content
title: Шаблон документации
description: Легкий стартовый проект Docara.
---

# Шаблон документации

Это небольшой проект Docara для GitHub Codespaces. В нем есть несколько Markdown-страниц, вложенный раздел и базовая конфигурация, чтобы сразу начать писать документацию.

## С чего начать

- [О проекте](about.md)
- [Страница платформы](page.md)
- [Структура проекта](structure.md)
- [Подраздел](sub-section/index.md)

## Редактирование

Откройте файлы в `source/docs/ru` и замените пример своим содержанием. Собрать сайт можно командой:

```bash
yarn build
```

Локальный просмотр:

```bash
yarn start
```

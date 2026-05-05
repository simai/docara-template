---
extends: _core._layouts.documentation
section: content
title: Структура проекта
description: Основные файлы и папки.
---

# Структура проекта

Шаблон разделяет исходный контент и результат сборки.

```text
.
|-- .devcontainer/
|-- source/
|   |-- docs/
|   |   |-- en/
|   |   `-- ru/
|   `-- _core/
|-- config.php
|-- package.json
|-- composer.json
`-- README.md
```

## Важные файлы

| Файл | Назначение |
| --- | --- |
| `source/docs` | Контент документации. |
| `source/_core` | Общие шаблоны и ассеты Docara. |
| `config.php` | Конфигурация сайта. |
| `.devcontainer/devcontainer.json` | Окружение Codespaces. |
| `package.json` | Команды сборки и просмотра. |

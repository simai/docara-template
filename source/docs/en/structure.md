---
extends: _core._layouts.documentation
section: content
title: Project Structure
description: Main files and folders.
---

# Project Structure

The template keeps source content and generated output separate.

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

## Important Files

| File | Purpose |
| --- | --- |
| `source/docs` | Documentation content. |
| `source/_core` | Shared Docara templates and assets. |
| `config.php` | Site configuration. |
| `.devcontainer/devcontainer.json` | Codespaces environment. |
| `package.json` | Local commands for build and preview. |

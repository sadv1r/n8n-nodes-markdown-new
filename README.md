# n8n-nodes-markdown-new

[![npm version](https://img.shields.io/npm/v/n8n-nodes-markdown-new.svg)](https://www.npmjs.com/package/n8n-nodes-markdown-new)

This is an n8n community node that converts any URL to clean Markdown using the [markdown.new](https://markdown.new) service.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation) |
[Operations](#operations) |
[Compatibility](#compatibility) |
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Convert URL to Markdown

Converts a web page to clean Markdown text.

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| URL | string | — | The URL of the web page to convert (required) |
| Method | `auto` / `ai` / `browser` | `auto` | The conversion method to use |
| Retain Images | boolean | `false` | Whether to keep image references in the output |

**Conversion methods:**

- **Auto** — Uses a three-tier fallback: native Markdown request, then AI conversion, then headless browser rendering
- **AI** — Uses Cloudflare Workers AI to convert HTML to Markdown
- **Browser** — Uses headless browser rendering for JavaScript-heavy pages (~1–2s extra latency)

## Compatibility

Tested with n8n v1.x. Requires n8n Nodes API version 1.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [markdown.new](https://markdown.new) — the underlying conversion service

## License

[MIT](LICENSE.md)
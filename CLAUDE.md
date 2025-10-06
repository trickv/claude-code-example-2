# Blog Project

This is a static site generator blog project using Eleventy (11ty).

## Technology Choice
- **Static Site Generator**: Eleventy (11ty)
- **Runtime**: Node.js (using nvm)
- **Why Eleventy**: Zero config to start, fast builds, multiple template languages, no Ruby dependency

## Git Repository
- Remote: git@github.com:trickv/claude-code-example-2.git

## Development Commands
- Build: `npm run build` - Generates static files to `_site/`
- Serve: `npm run serve` - Serves site locally
- Development: `npm run dev` - Serves with live reload and watch mode

## Project Structure
- `src/` - Source files (Markdown, templates, assets)
- `src/_includes/` - Layout templates (Nunjucks)
- `src/posts/` - Blog posts (Markdown with frontmatter)
- `src/css/` - Stylesheets
- `_site/` - Generated static files (included in git for easy deployment)
- `.eleventy.js` - Eleventy configuration

## Deployment
The `_site/` directory contains all static files ready for upload to any web host. These files are tracked in git for convenience.
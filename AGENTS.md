<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Swipecut architecture
- Keep all business features client-side with no server functions, API routes, authentication or persistence; this site is a frontend-only agency portfolio.
- Store project media configuration in src/data/portfolio.ts and service/FAQ/contact configuration in src/data/content.ts; reusable UI must not own portfolio content.
- Use dedicated public TanStack routes with leaf metadata and shared root navigation; each page must be directly linkable and statically prerenderable.
- Use native controlled video playback and Radix dialogs; this preserves accessibility, lazy media loading and focus containment without a heavy player library.

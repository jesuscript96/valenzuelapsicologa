import type { APIRoute } from 'astro';
import { DRAFT } from '../data/site';

export const GET: APIRoute = ({ site }) =>
  new Response(
    DRAFT
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );

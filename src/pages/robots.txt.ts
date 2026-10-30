import type { APIRoute } from 'astro';
import { DRAFT } from '../data/site';

export const GET: APIRoute = () =>
  new Response(DRAFT ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

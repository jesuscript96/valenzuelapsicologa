// Generative contour art, computed at build time so the page ships plain SVG.
// solid = transformar, dashed = elaborar, dotted = aprender a convivir.

export type LineStyle = 'c-solid' | 'c-dash' | 'c-dot';
export interface ArtPath { d: string; cls: LineStyle }

export interface RingsOptions {
  seed?: number; rings?: number; r0?: number; step?: number; amp?: number;
  solid?: number; dash?: number; cx?: number; cy?: number;
}
export interface FlowOptions { seed?: number; lines?: number; width: number; height: number }

// mulberry32: small deterministic PRNG so each seed always draws the same shape
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const styleFor = (i: number, solid: number, dash: number): LineStyle =>
  i < solid ? 'c-solid' : i < solid + dash ? 'c-dash' : 'c-dot';

export function rings(o: RingsOptions = {}): ArtPath[] {
  const rand = rng(o.seed || 1);
  const n = o.rings || 14, r0 = o.r0 || 40, step = o.step || 24, amp = o.amp || 0.07;
  const cx = o.cx || 400, cy = o.cy || 400;
  const solid = o.solid ?? Math.round(n * 0.4), dash = o.dash ?? Math.round(n * 0.3);
  const ph = [rand() * 6.283, rand() * 6.283, rand() * 6.283];
  const dr = [0.22, -0.31, 0.4].map((v) => v * (0.7 + rand() * 0.6));
  const out: ArtPath[] = [];
  for (let i = 0; i < n; i++) {
    const R = r0 + i * step, a = amp * (0.6 + (i / n) * 1.1), N = 220, pts: string[] = [];
    for (let k = 0; k <= N; k++) {
      const t = (k / N) * Math.PI * 2;
      const w = 1 + a * (Math.sin(2 * t + ph[0] + i * dr[0]) + 0.6 * Math.sin(3 * t + ph[1] + i * dr[1]) + 0.35 * Math.sin(5 * t + ph[2] + i * dr[2]));
      pts.push((cx + R * w * Math.cos(t)).toFixed(1) + ' ' + (cy + R * w * 0.92 * Math.sin(t)).toFixed(1));
    }
    out.push({ d: 'M' + pts.join('L') + 'Z', cls: styleFor(i, solid, dash) });
  }
  return out;
}

export function flow(o: FlowOptions): ArtPath[] {
  const { width: W, height: H } = o, n = o.lines || 20, rand = rng(o.seed || 5);
  const p1 = rand() * 6.283, p2 = rand() * 6.283;
  const out: ArtPath[] = [];
  for (let i = 0; i < n; i++) {
    const y0 = H * 0.12 + (i * (H * 0.76)) / (n - 1), pts: string[] = [];
    for (let x = 0; x <= W; x += 6) {
      const u = x / W;
      const y = y0 + H * 0.16 * Math.sin(u * Math.PI * 1.7 + p1 + i * 0.16) + H * 0.07 * Math.sin(u * Math.PI * 3.4 + p2 - i * 0.11) * (0.4 + 0.6 * Math.sin(u * Math.PI));
      pts.push(x.toFixed(1) + ' ' + y.toFixed(1));
    }
    out.push({ d: 'M' + pts.join('L'), cls: styleFor(i, Math.round(n * 0.4), Math.round(n * 0.3)) });
  }
  return out;
}

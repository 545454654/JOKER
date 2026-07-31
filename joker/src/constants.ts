export const ADMIN_PASSWORD = 'ROZ12026';
export const PERMANENT_CODE = '80E4D-8EA8F-7DF57-F891E';
export const PROMO_CODE = '2xee';

export const SAFE_APPLE_IMG = 'https://b.top4top.io/p_36305byzd1.jpg';
export const ROTTEN_APPLE_IMG = 'https://c.top4top.io/p_3630bvfr81.jpg';
export const DEFAULT_APPLE_IMG = 'https://marwan.fun/marwan1.png';
export const JOKER_LOGO_IMG = '/src/assets/images/joker_logo_emblem_1785528890267.jpg';
export const LOGO_IMG = JOKER_LOGO_IMG;

export const ROW_CONFIG = [
  { multiplier: '349.68', safe: 1, rotten: 4, rowIndex: 9 },
  { multiplier: '69.93', safe: 2, rotten: 3, rowIndex: 8 },
  { multiplier: '27.92', safe: 2, rotten: 3, rowIndex: 7 },
  { multiplier: '11.18', safe: 3, rotten: 2, rowIndex: 6 },
  { multiplier: '6.71', safe: 3, rotten: 2, rowIndex: 5 },
  { multiplier: '4.02', safe: 3, rotten: 2, rowIndex: 4 },
  { multiplier: '2.41', safe: 4, rotten: 1, rowIndex: 3 },
  { multiplier: '1.93', safe: 4, rotten: 1, rowIndex: 2 },
  { multiplier: '1.54', safe: 4, rotten: 1, rowIndex: 1 },
  { multiplier: '1.23', safe: 4, rotten: 1, rowIndex: 0 }
];

export function generateStrongCode(length = 20): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateRandomGrid() {
  const grid: Record<string, string> = {};
  for (let r = 0; r < ROW_CONFIG.length; r++) {
    const row = ROW_CONFIG[r];
    const total = row.safe + row.rotten; // 5 cells
    const safePositions: number[] = [];
    while (safePositions.length < row.safe) {
      const rand = Math.floor(Math.random() * total);
      if (!safePositions.includes(rand)) {
        safePositions.push(rand);
      }
    }
    for (let c = 0; c < total; c++) {
      const idx = row.rowIndex * 5 + c + 1;
      grid[`m${idx}`] = safePositions.includes(c) ? '1' : '0';
    }
  }
  return grid;
}

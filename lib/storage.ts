import { env } from 'cloudflare:workers';
export function database(){const db=(env as any).DB;if(!db)throw new Error('Storage unavailable');return db;}
export function bucket(){const b=(env as any).BUCKET;if(!b)throw new Error('Photo storage unavailable');return b;}

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const cleanseState=sqliteTable('cleanse_state',{id:text('id').primaryKey(),data:text('data').notNull(),revision:integer('revision').notNull().default(0)});

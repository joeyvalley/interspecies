import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), 'content', 'newsletters');
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const raw  = fs.readFileSync(path.join(dir, filename), 'utf8');
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date:  data.date  || '',
    };
  });

  return NextResponse.json(posts);
}
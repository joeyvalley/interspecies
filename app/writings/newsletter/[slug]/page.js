// app/newsletter/[slug]/page.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import NewsletterMenuBar from '@/app/components/NewsletterMenubar';
import Footer from '@/app/components/Footer';

export default async function NewsletterPage({ params }) {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    'content',
    'newsletters',
    `${slug}.md`
  );
  const raw = fs.readFileSync(filePath, 'utf8');

  // 1. Parse front-matter
  const { data, content: markdown } = matter(raw);

  // 2. Convert Markdown → HTML, allowing raw HTML through
  const file = await unified()
    .use(remarkParse)                              // parse Markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // to HAST, keep HTML
    .use(rehypeRaw)                                 // parse that HTML
    .use(rehypeStringify)                           // back to HTML
    .process(markdown);

  const contentHtml = String(file);

  // 3. Render
  return (
    <div className="container">
      <div className="newsletter-container">
        <div className="newsletter-column pagination-left">&larr;</div>
        <div className="newsletter-column  newsletter-page">
          <div className="newsletter-heading">
            <div className="newsletter-title">
              <h2>NEWSLETTER - {data.date}</h2>
              <h1>INTERSPECIES COMMUNICATION</h1>
            </div>
            <div className="newsletter-subtitle">
              <h1>Published quarterly by Interspecies Communication, Inc.</h1>
              <h2><a href={data.pdf} target="_blank" rel="noopener noreferrer">PDF Version</a></h2>
            </div>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: contentHtml }}>
          </div>
        </div>
        <div className="newsletter-column  pagination-right">&rarr;</div>
      </div>
    </div>
  );
}
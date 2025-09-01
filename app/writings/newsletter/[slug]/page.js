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
import NewsletterFooter from '@/app/components/NewsletterFooter';

export default async function NewsletterPage({ params }) {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    'content',
    'newsletters',
    `${slug}.md`
  );
  const raw = fs.readFileSync(filePath, 'utf8');

  const { data, content: markdown } = matter(raw);

  const file = await unified()
    .use(remarkParse)                              
    .use(remarkRehype, { allowDangerousHtml: true }) 
    .use(rehypeRaw)                                 
    .use(rehypeStringify)                           
    .process(markdown);

  const contentHtml = String(file);

const newsletterNum = parseInt(data.pdf.slice(-2), 10);

  return (
    <div className="newsletter-page-container">
      <NewsletterMenuBar />
      <div className="newsletter-container">
        <div className="newsletter-column pagination-left">
          {newsletterNum > 1 && newsletterNum !== 20 && (
            <a href={`interspecies-newsletter-${newsletterNum === 21 ? 19 : newsletterNum - 1}`}>
              &larr;
            </a>
          )}
        </div>
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
        <div className="newsletter-column pagination-right">
          {newsletterNum < 67 && newsletterNum !== 20 && (
            <a href={`interspecies-newsletter-${newsletterNum === 19 ? 21 : newsletterNum + 1}`}>
              &rarr;
            </a>
          )}
        </div>
      </div>
      <NewsletterFooter />
    </div>
  );
}
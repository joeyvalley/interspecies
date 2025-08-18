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
      <NewsletterMenuBar />
      <div className="newsletter-container">
        <div className="newsletter-page">
          {/* <div className="newsletter-title">
            <h1>INTERSPECIES COMMUNICATION</h1>
            <h2>{data.date}</h2>
          </div> */}
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: contentHtml }}/>
          <div className="newsletter-image">
            <img className="drawing" src="https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992269/IN0013-6_zfdjxv.png" alt="Interspecies Logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
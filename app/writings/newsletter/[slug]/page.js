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
      <div className="newsletter-container">
        <embed src={data.link} type="application/pdf" width="100%" height="100%" border="none" />
      </div>
  );
}
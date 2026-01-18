import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "newsletters");

const newsletters = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);

    const match = data.title.match(/\d+/);
    if (!match) {
      throw new Error(`Could not extract issue number from title: ${data.title}`);
    }

    const issueNumber = Number(match[0]);
    const padded = String(issueNumber).padStart(2, "0");

    return {
      id: `interspecies-newsletter-${padded}`,
      number: issueNumber,
      title: data.title,
      date: data.date,
      pdf: data.pdf,
      link: data.link,
    };
  })
  .sort((a, b) => a.number - b.number);

// ✅ Write JS module
fs.writeFileSync(
  "content/newsletters/index.js",
  `export default ${JSON.stringify(newsletters, null, 2)};\n`
);

// ✅ Write JSON file
fs.writeFileSync(
  "content/newsletters/index.json",
  JSON.stringify(newsletters, null, 2)
);

console.log(`Generated ${newsletters.length} newsletter entries.`);
import fs from "fs";
import path from "path";
import { marked } from "marked";

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
});

export function getBusyBlogData() {
  const filePath = path.join(process.cwd(), "busy-project-deep-dive-blog.md");
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const rawContent = fs.readFileSync(filePath, "utf8");

  // Parse frontmatter
  let frontmatter = {};
  let markdownBody = rawContent;

  if (rawContent.startsWith("---")) {
    const parts = rawContent.split("---");
    if (parts.length >= 3) {
      const yamlStr = parts[1];
      markdownBody = parts.slice(2).join("---").trim();

      // Simple YAML parser
      yamlStr.split("\n").forEach((line) => {
        const colonIndex = line.indexOf(":");
        if (colonIndex > -1) {
          const key = line.slice(0, colonIndex).trim();
          let val = line.slice(colonIndex + 1).trim();
          if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
          }
          if (key === "tags") {
            // will collect below
          } else if (key) {
            frontmatter[key] = val;
          }
        }
      });

      // Collect tags
      const tagsMatch = yamlStr.match(/tags:\s*([\s\S]*?)(?=\w+:|$)/);
      if (tagsMatch) {
        frontmatter.tags = tagsMatch[1]
          .split("\n")
          .map((t) => t.replace(/^[\s-]+/, "").trim())
          .filter(Boolean);
      }
    }
  }

  // Remove duplicate top H1 if it matches frontmatter title
  if (markdownBody.startsWith("# How I Built Busy")) {
    const firstLineEnd = markdownBody.indexOf("\n");
    if (firstLineEnd > -1) {
      markdownBody = markdownBody.slice(firstLineEnd).trim();
    }
  }

  // Extract table of contents headings
  const headings = [];
  const lines = markdownBody.split("\n");
  lines.forEach((line) => {
    if (line.startsWith("# ") || line.startsWith("## ") || line.startsWith("### ")) {
      const level = line.startsWith("### ") ? 3 : line.startsWith("## ") ? 2 : 1;
      const text = line.replace(/^#{1,3}\s+/, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ level, text, id });
    }
  });

  // Add IDs to headings in markdown
  const renderer = new marked.Renderer();
  renderer.heading = ({ text, depth }) => {
    const id = text
      .toLowerCase()
      .replace(/<[^>]*>/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return `<h${depth} id="${id}" class="heading-anchor scroll-mt-24 group"><span class="heading-text">${text}</span><a href="#${id}" class="heading-link opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-accent" aria-label="Link to section">#</a></h${depth}>`;
  };

  renderer.image = ({ href, title, text }) => {
    return `<figure class="blog-figure my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0C0C0E]">
      <div class="p-2 sm:p-4 bg-[#0C0C0E]">
        <img src="${href}" alt="${text || 'Figure'}" class="w-full h-auto rounded-lg object-contain" />
      </div>
      ${text ? `<figcaption class="px-4 py-2.5 bg-[#131317] border-t border-white/10 text-xs font-mono text-titanium-400 text-center">${text}</figcaption>` : ''}
    </figure>`;
  };

  const htmlContent = marked(markdownBody, { renderer });

  // Calculate read time
  const wordCount = markdownBody.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200) + " min read";

  return {
    frontmatter,
    headings: headings.filter((h) => h.level <= 2), // Keep H1 and H2 for sleek TOC
    htmlContent,
    wordCount,
    readTime,
  };
}

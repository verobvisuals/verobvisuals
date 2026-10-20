// Turns *word* into an italic accent, the signature heading style of the site.
// Text is escaped first, so it's safe to use with set:html.
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const emph = (s = '') => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>');

// Paragraph text: blank lines become separate paragraphs
export const paras = (s = '') =>
  s
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${emph(p).replace(/\n/g, '<br>')}</p>`)
    .join('');

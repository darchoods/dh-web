import DOMPurify from 'dompurify';
import { marked } from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
});

export default (text) => {
  if (text.length === 0) {
    return '';
  }
  return DOMPurify.sanitize(marked.parse(text));
};

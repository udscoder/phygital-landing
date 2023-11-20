export function scrollTo(id, block) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ block: block, behavior: 'smooth' });
  }
}
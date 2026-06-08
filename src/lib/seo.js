function setMeta(name, content, attr = 'name') {
  if (!content) return
  let element = document.querySelector(`meta[${attr}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function setPageMeta({ title, description, url, image }) {
  document.title = title
  setMeta('description', description)
  setMeta('og:title', title, 'property')
  setMeta('og:description', description, 'property')
  setMeta('og:url', url, 'property')
  setMeta('og:image', image, 'property')
  setMeta('twitter:card', 'summary_large_image', 'name')
  setMeta('twitter:title', title, 'name')
  setMeta('twitter:description', description, 'name')
  if (image) {
    setMeta('twitter:image', image, 'name')
  }
}

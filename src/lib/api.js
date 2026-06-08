export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('centrelatio_token')
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`/api${path}`, {
    ...options,
    headers,
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    const message = data?.error || data?.message || 'Erreur serveur'
    const error = new Error(message)
    error.status = response.status
    error.payload = data
    throw error
  }

  return data
}

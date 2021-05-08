import config from 'config'

const EXPIRATION_DAYS = config.get('cache.tutor')

export async function getTutorsBySlug(tutorSlug: string) {
  const cache = await checkIfCacheExists(languageSlug)

  let data: ReturnType<typeof tranformToResponse> = []

  if (!cache) {
    data = await refreshCache(languageSlug)
  } else {
    data = await getFromCache(cache, expirationDay, languageSlug)
  }
}

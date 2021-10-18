export const fetchApi = async (url, options = {}) => {
	const res = await fetch(url, options)
	try {
		if (res.ok) {
			return await res.json()
		}
		throw new Error('API를 가지고 올 수 없습니다!')
	} catch (e) {
		console.error('API를 가져올 수 없습니다!')
	}
}

var env = {}
if (window) {
  Object.assign(env, window.__env)
}

export const LOCAL_MOCK_SERVER_IP = 'http://localhost:3100/wrench'
export const MOCK_SERVER_IP = 'http://70.121.224.26:3100/wrench'
export const CD_API_SERVER_IP = env.apiUrl

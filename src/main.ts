import { createSSRApp } from 'vue'
import pinia from './stores'
import 'uno.css'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app,
  }
}

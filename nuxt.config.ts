// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'NAMER 변수 이름, 함수 이름, 클래스 이름 생성',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' }
      ],
      link: [
        {
          rel: 'icon',
          href: 'favicon.svg'
          /* TODO Safari, iOS 등에서 svg 지원을 위해 추가 설정 필요
             https://brunch.co.kr/@ultra0034/129 참고 */
        }
      ]
    }
  },
  modules: [
    '@element-plus/nuxt'
  ],
  css: ['@/assets/css/global.css']
})

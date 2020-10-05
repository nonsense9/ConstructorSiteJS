import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

// const text = `
// Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
// `
const text = ''


export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'red',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'Построенно по принципу ООП',
    'JavaScript - это просто и интересно.'
  ], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  })
]
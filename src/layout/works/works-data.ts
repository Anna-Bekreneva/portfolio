import {PictureProps} from "components";

type WorkType = {
  title: string
  text: string
  codeHref: string
  previewHref: string
  tools: string
} & PictureProps

export const works: WorkType[] = [
  {
    alt: 'Социальная сеть',
    srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/social/social.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/social/social@2x.webp 2x`,
    srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/social/social.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/social/social@2x.avif 2x`,
    src: `${process.env.PUBLIC_URL}/assets/images/works/social/social.jpg`,
    srcSet: `${process.env.PUBLIC_URL}/assets/images/works/social/social.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/works/social/social@2x.jpg 2x`,
    title: 'Социальная сеть',
    text: 'Проект сделан частично на классовых компонентах. Реализованы все CRUD операции',
    codeHref: 'https://github.com/Anna-Bekreneva/social-network',
    previewHref: 'https://anna-bekreneva.github.io/social-network',
    tools: 'TS, React, Redux, Formik, Axios',
  },
  {
    alt: 'Счетчик',
    srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/counter/counter@2x.webp 2x`,
    srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/counter/counter@2x.avif 2x`,
    src: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.jpg`,
    srcSet: `${process.env.PUBLIC_URL}/assets/images/works/counter/counter.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/works/counter/counter@2x.jpg 2x`,
    title: 'Счетчик',
    text: 'Небольшой проект на функциональных компонентах. Используются хуки реакта и кастомные. Реализована работа с localstorage. Проведена оптимизация приложения',
    codeHref: 'https://github.com/Anna-Bekreneva/counter',
    previewHref: 'https://anna-bekreneva.github.io/counter/',
    tools: 'TS, React, Redux, LocalStorage',
  },
  {
    alt: 'Менеджер задач',
    srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.webp 2x`,
    srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.avif 2x`,
    src: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.jpg`,
    srcSet: `${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/works/todolist/todolist@2x.jpg 2x`,
    title: 'Менеджер задач',
    text: 'Используется стейт-менеджер Redux-Toolkit. Подключен storybook для тестирования компонент. Дизайн реализован с помощью Material ui',
    codeHref: 'https://github.com/Anna-Bekreneva/todolist',
    previewHref: 'https://anna-bekreneva.github.io/todolist',
    tools: 'TS, React, Redux Toolkit, Redux-Thunk, Storybook, Material Ui, Formik, Axios',
  },
  {
    alt: 'Обучающая платформа',
    srcWebp: `${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards.webp 1x, ${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards@2x.webp 2x`,
    srcAvif: `${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards.avif 1x, ${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards@2x.avif 2x`,
    src: `${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards.jpg`,
    srcSet: `${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards.jpg 1x, ${process.env.PUBLIC_URL}/assets/images/works/flashcards/flashcards@2x.jpg 2x`,
    title: 'Обучающая платформа',
    text: 'В качестве стейт-менеджера используется RTK Query. Работы\u00A0с формами реализована при помощи React\u00A0Hook\u00A0Form и\u00A0Zod. Дизайн создан на\u00A0модульных стилях с\u00A0использованием Radix UI',
    codeHref: 'https://github.com/Anna-Bekreneva/flashcards',
    previewHref: 'https://flashcards-kappa-one.vercel.app/',
    tools: 'TS, React, RTK Query, Storybook, Radix UI, Zod, React Hook Form',
  }
]
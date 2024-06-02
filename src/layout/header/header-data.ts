type MenuItemsType = {
  title: string,
  to: string,
}

type SocialItemsType = {
  iconId: string
  ariaLabel: string
  href: string
}
export const menuItems: MenuItemsType[] = [
  {
    title: 'Навыки',
    to: 'skills',
  },
  {
    title: 'Портфолио',
    to: 'works',
  },
  {
    title: 'Образование',
    to: 'education',
  },
  {
    title: 'Контакты',
    to: 'contacts',
  }
]
export const socialItems: SocialItemsType[] = [
  {
    iconId: 'gitHubIcon',
    ariaLabel: 'gitHub',
    href: 'https://github.com/Anna-Bekreneva',
  },
  {
    iconId: 'telegramIcon',
    ariaLabel: 'Telegram',
    href: 'https://t.me/anna_bekrenewa',
  },
]
import { DISCORD_INVITE_URL, GITHUB_URL, X_URL } from '../constant'
import List from './List'

export default function SocialsList({ items }: { items: SocialItemType[] }) {
  return (
    <>
      <List
        items={items.map((item) => listItems[item])}
        createRow={(item) => ({
          id: item.url,
          title: item.title,
          subtitle: item.subtitle,
          leadingImage: item.iconUrl,
          showArrow: true,
          url: item.url
        })}
        onItemClick={(item) => {
          window.open(item.url, '_blank')
        }}
      />
    </>
  )
}

type SocialItemType = 'x' | 'discord' | 'github'

interface SocialItem {
  title: string
  subtitle: string
  iconUrl: string
  url: string
}

const listItems: Record<SocialItemType, SocialItem> = {
  x: {
    title: 'X',
    subtitle: 'Follow me on X',
    iconUrl: '/xIcon.png',
    url: X_URL
  },
  discord: {
    title: 'Discord',
    subtitle: 'Join Discord server',
    iconUrl: '/discordIcon.png',
    url: DISCORD_INVITE_URL
  },
  github: {
    title: 'GitHub',
    subtitle: 'View my open source projects',
    iconUrl: '/githubIcon.png',
    url: GITHUB_URL
  }
}

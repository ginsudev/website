import List from '../../Components/List'
import PageIntroduction from '../../Components/PageIntroduction'
import PackageList from '../Packages/PackageList'
import SocialsList from '../../Components/SocialsList'

const repoUrl = 'https://noahlittle.net/repo'

const repoClients = [
  {
    id: 'cydia',
    title: 'Add to Cydia',
    subtitle: repoUrl,
    leadingImage: '/cydiaIcon.jpg',
    href: `cydia://url/https://cydia.saurik.com/api/share#?source=${repoUrl}`
  },
  {
    id: 'sileo',
    title: 'Add to Sileo',
    subtitle: repoUrl,
    leadingImage: '/sileoIcon.jpg',
    href: `sileo://source/${repoUrl}`
  },
  {
    id: 'zebra',
    title: 'Add to Zebra',
    subtitle: repoUrl,
    leadingImage: '/zebraIcon.jpg',
    href: `zbra://sources/add/${repoUrl}`
  }
]

export default function RepoPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PageIntroduction title='APT Repo' subtitle='A repo for my apps.' leadingImage='/repo/CydiaIcon.png' />

      <List
        items={repoClients}
        createRow={(client) => ({
          id: client.id,
          title: client.title,
          subtitle: client.subtitle,
          leadingImage: client.leadingImage,
          showArrow: true
        })}
        onItemClick={(client) => {
          window.location.href = client.href
        }}
      />

      <SocialsList items={['x', 'discord', 'github']} />

      <PackageList />
    </div>
  )
}

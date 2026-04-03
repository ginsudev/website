import List from '../../Components/List'
import PageIntroduction from '../../Components/PageIntroduction'
import SocialsList from '../../Components/SocialsList'

const projects = [
  {
    id: 'subatomic',
    title: 'Subatomic',
    subtitle: 'iOS client for self-hosted music servers',
    leadingImage: '/AppIconSubsonic.png',
    href: '#/subatomic'
  },
  {
    id: 'apt-repo',
    title: 'APT Repo',
    subtitle: 'Browse packages, depictions, and versions',
    leadingImage: '/repo/CydiaIcon.png',
    href: '#/repo'
  }
]

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PageIntroduction title="Welcome to Noah's website" subtitle='Browse apps and open source projects.' leadingImage='/repo/CydiaIcon.png' />

      <SocialsList items={['x', 'github']} />

      <List
        items={projects}
        createRow={(project) => ({
          id: project.id,
          title: project.title,
          subtitle: project.subtitle,
          leadingImage: project.leadingImage,
          showArrow: true
        })}
        onItemClick={(project) => {
          window.location.href = project.href
        }}
      />
    </div>
  )
}

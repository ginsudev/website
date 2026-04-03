import PageIntroduction from '../../Components/PageIntroduction'
import PackageList from '../Packages/PackageList'
import SocialsList from '../../Components/SocialsList'

export default function RepoPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PageIntroduction title='APT Repo' subtitle='A repo for my apps.' leadingImage='/repo/CydiaIcon.png' />

      <SocialsList items={['x', 'discord', 'github']} />

      <PackageList />
    </div>
  )
}

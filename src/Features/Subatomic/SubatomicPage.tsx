import type { CSSProperties, PropsWithChildren } from 'react'
import ReactMarkdown from 'react-markdown'
import ClassicButton from '../../Components/ClassicButton'
import PageIntroduction from '../../Components/PageIntroduction'
import SectionContent from '../../Components/SectionContent'
import { SUBATOMIC_SUPPORT_EMAIL } from '../../constant'

const sectionTitleStyle: CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333'
}

const markdownComponents = {
  p: ({ children }: PropsWithChildren) => <p style={{ margin: '0.5rem 0' }}>{children}</p>,
  ul: ({ children }: PropsWithChildren) => <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>{children}</ul>,
  li: ({ children }: PropsWithChildren) => <li style={{ margin: '0.25rem 0' }}>{children}</li>,
  a: ({ children, href }: PropsWithChildren<{ href?: string }>) => (
    <a href={href} style={{ color: '#007bff', textDecoration: 'none' }}>
      {children}
    </a>
  )
}

const description = `
Subatomic is an iOS client for connecting to self-hosted media servers and listening to your library from anywhere.

- Stream your music library remotely with chunked playback.
- Download songs for offline listening.
- Manage playlists, queues, and multiple servers from one app.
- Works with Subsonic, Navidrome, and Ampache servers.
`

export default function SubatomicPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PageIntroduction
        title='Subatomic'
        subtitle='iOS client for self-hosted music servers.'
        leadingImage='/AppIconSubsonic.png'
      />

      <div style={sectionTitleStyle}>Description</div>
      <SectionContent>
        <ReactMarkdown components={markdownComponents}>{description}</ReactMarkdown>
      </SectionContent>

      <SectionContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ color: '#333' }}>
            Need help with Subatomic? Reach out directly and I&apos;ll get back to you by email.
          </div>
          <ClassicButton title='Contact support' onClick={() => (window.location.href = `mailto:${SUBATOMIC_SUPPORT_EMAIL}`)} />
        </div>
      </SectionContent>
    </div>
  )
}

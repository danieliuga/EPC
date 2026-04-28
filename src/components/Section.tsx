import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
  className?: string
}

export default function Section({ eyebrow, title, description, actions, children, className }: SectionProps) {
  return (
    <section className={className}>
      <div className="container-app py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">{title}</h2>
          {description && (
            <p className="mt-3 text-ink/80 md:text-lg leading-relaxed">{description}</p>
          )}
          {actions && <div className="mt-6 flex gap-3">{actions}</div>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

import clsx from './clsx'
import styles from './Container.module.css'

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={clsx(styles.container, className)}>{children}</div>
}


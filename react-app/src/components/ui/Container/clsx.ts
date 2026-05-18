export default function clsx(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(' ')
}


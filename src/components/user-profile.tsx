import { useGetProfile } from '../http/generated/api'

export function UserProfile() {
  const { data } = useGetProfile()

  if (!data) {
    return null
  }

  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
      <img
        alt="avatar profile"
        className="size-8 rounded-md"
        src={data.user.avatarUrl}
      />

      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-xs">{data.user.name}</span>
        <span className="break-all text-xxs text-zinc-400">
          {data.user.email ?? 'sem e-mail'}
        </span>
      </div>
    </div>
  )
}

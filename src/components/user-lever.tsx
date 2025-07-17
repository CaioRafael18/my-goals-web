import { useGetUserExperienceAndLevel } from '../http/generated/api'
import { Progress } from './ui/progress'

export function UserLevel() {
  const { data } = useGetUserExperienceAndLevel()

  if (!data) {
    return null
  }

  const percentage = Math.round(
    (data.experience * 100) / data.experienceToNextLevel
  )

  return (
    <div className="flex w-full max-w-full flex-col gap-1 md:max-w-[220px]">
      <div className="flex flex-wrap items-center justify-between gap-1 px-2 text-xxs text-zinc-200">
        <span>Lvl {data.level}</span>
        <span className="truncate text-zinc-400">
          {data.experience}xp de {data.experienceToNextLevel}xp
        </span>
        <span>{percentage}%</span>
      </div>

      <Progress max={data.experienceToNextLevel} value={percentage} />
    </div>
  )
}

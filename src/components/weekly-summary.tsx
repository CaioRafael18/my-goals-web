import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import type { GetWeekSummary200Summary } from '@/http/generated/api'
import { CreateGoal } from './create-goal'
import { InOrbitIcon } from './in-orbit-icon'
import { PendingGoals } from './pending-goals'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Separator } from './ui/separator'
import { UserLevel } from './user-lever'
import { UserProfile } from './user-profile'

dayjs.locale(ptBR)

interface WeeklySummaryProps {
  summary: GetWeekSummary200Summary
}

type GoalsPerDay = Record<
  string,
  {
    id: string
    title: string
    completedAt: string
  }[]
>

export function WeeklySummary({ summary }: WeeklySummaryProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const weekStartsAtParam = searchParams.get('week_starts_at')

  const weekStartsAt = weekStartsAtParam
    ? new Date(weekStartsAtParam)
    : new Date()

  const fromDate = dayjs(weekStartsAt).startOf('week').format('D[ de ]MMM')
  const toDate = dayjs(weekStartsAt).endOf('week').format('D[ de ]MMM')

  const completePercentage = summary.total
    ? Math.round((summary.completed * 100) / summary.total)
    : 0

  function handlePreviousWeek() {
    const params = new URLSearchParams(searchParams)

    params.set(
      'week_starts_at',
      dayjs(weekStartsAt).subtract(7, 'days').toISOString()
    )

    setSearchParams(params)
  }

  function handleNextWeek() {
    const params = new URLSearchParams(searchParams)

    params.set(
      'week_starts_at',
      dayjs(weekStartsAt).add(7, 'days').toISOString()
    )

    setSearchParams(params)
  }

  const isCurrentWeek = dayjs(weekStartsAt).endOf('week').isAfter(new Date())

  return (
    <main className="mx-auto flex w-full max-w-[600px] flex-col gap-6 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 rounded-xl bg-zinc-900 px-4 py-3 shadow-shape sm:flex-row sm:items-center sm:justify-between">
        <UserProfile />
        <UserLevel />
      </div>
      <div className="flex flex-col gap-6 px-5 ">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex items-center gap-2">
              <InOrbitIcon />
              <span className="font-semibold text-lg">
                {fromDate}-{toDate}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={handlePreviousWeek}
                size="icon"
                variant="secondary"
              >
                <ArrowLeft className="size-4" />
              </Button>

              <Button
                disabled={isCurrentWeek}
                onClick={handleNextWeek}
                size="icon"
                variant="secondary"
              >
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <CreateGoal isCurrentWeek={isCurrentWeek} />
        </div>

        <div className="flex flex-col gap-3">
          <Progress max={summary.total ?? 1} value={completePercentage} />

          <div className="flex flex-col gap-1 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <span className="break-words">
              Você completou{' '}
              <span className="text-zinc-100">{summary.completed}</span> de{' '}
              <span className="text-zinc-100">{summary.total}</span> metas nessa
              semana.
            </span>
            <span>{completePercentage}%</span>
          </div>
        </div>

        <Separator />

        {isCurrentWeek && <PendingGoals />}

        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-xl">Sua semana</h2>

          {summary.goalsPerDay &&
            Object.entries(summary.goalsPerDay as GoalsPerDay).map(
              ([date, goals]) => {
                const weekDay = dayjs(date).format('dddd')
                const formattedDate = dayjs(date).format('D[ de ]MMMM')

                return (
                  <div className="flex flex-col gap-4" key={date}>
                    <h3 className="font-medium">
                      <span className="capitalize">{weekDay} </span>
                      <span className="text-xs text-zinc-400">
                        ({formattedDate})
                      </span>
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {goals.map((goal) => {
                        const time = dayjs(goal.completedAt).format('HH:mm')

                        return (
                          <li className="flex items-center gap-2" key={goal.id}>
                            <CheckCircle2 className="size-4 text-pink-500" />
                            <span className="text-sm text-zinc-400">
                              Você completou "
                              <span className="text-zinc-100">
                                {goal.title}
                              </span>
                              " às{' '}
                              <span className="text-zinc-100">{time}h</span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              }
            )}
        </div>
      </div>
    </main>
  )
}

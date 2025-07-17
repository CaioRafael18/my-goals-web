import { useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import {
  getGetPendingGoalsQueryKey,
  getGetUserExperienceAndLevelQueryKey,
  getGetWeekSummaryQueryKey,
  useCreateCompletion,
  useGetPendingGoals,
} from '../http/generated/api'
import { Button } from './ui/button'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useGetPendingGoals()

  const { mutateAsync: createGoalCompletion } = useCreateCompletion()

  if (isLoading || !data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion({ data: { goalId } })

    queryClient.invalidateQueries({ queryKey: getGetPendingGoalsQueryKey() })
    queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })
    queryClient.invalidateQueries({
      queryKey: getGetUserExperienceAndLevelQueryKey(),
    })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map((goal) => {
        return (
          <Button
            className="rounded-full capitalize"
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            key={goal.id}
            onClick={() => handleCompleteGoal(goal.id)}
            variant="outline"
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </Button>
        )
      })}
    </div>
  )
}

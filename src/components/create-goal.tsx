import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  getGetPendingGoalsQueryKey,
  getGetWeekSummaryQueryKey,
  useCreateGoal,
} from '../http/generated/api'
import { ItemWeek } from './item-week'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { RadioGroup } from './ui/radio-group'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.input<typeof createGoalForm>

export function CreateGoal({ isCurrentWeek }: { isCurrentWeek?: boolean }) {
  const queryClient = useQueryClient()
  const form = useForm<CreateGoalForm>({
    resolver: zodResolver(createGoalForm),
  })
  const { mutateAsync: createGoal } = useCreateGoal()

  async function handleCreateGoal({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalForm) {
    await createGoal({
      data: {
        title,
        desiredWeeklyFrequency: Number(desiredWeeklyFrequency),
      },
    })

    queryClient.invalidateQueries({ queryKey: getGetPendingGoalsQueryKey() })
    queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })

    form.reset()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button disabled={!isCurrentWeek} size="sm" variant="violet">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cadastrar meta</SheetTitle>
          <SheetDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            className="flex flex-1 flex-col justify-between px-5"
            onSubmit={form.handleSubmit(handleCreateGoal)}
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel htmlFor="title">Qual a atividade?</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            id="title"
                            placeholder="Praticar exercícios, meditar, etc..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  defaultValue={3}
                  name="desiredWeeklyFrequency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="title">
                        Quantas vezes na semana?
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={String(field.value)}
                        >
                          <ItemWeek icon="🥱" value="1" />
                          <ItemWeek icon="🙂" value="2" />
                          <ItemWeek icon="😎" value="3" />
                          <ItemWeek icon="😜" value="4" />
                          <ItemWeek icon="🤨" value="5" />
                          <ItemWeek icon="🤯" value="6" />
                          <ItemWeek icon="🔥" value="7" />
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <SheetFooter>
              <div className="flex items-center gap-3">
                <SheetClose asChild>
                  <Button className="flex-1" type="button" variant="secondary">
                    Fechar
                  </Button>
                </SheetClose>
                <Button className="flex-1" variant="violet">
                  Salvar
                </Button>
              </div>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}

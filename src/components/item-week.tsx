import { RadioGroupIndicator, RadioGroupItem } from './ui/radio-group'

interface ItemWeekProps {
  value: string
  icon: string
}

export function ItemWeek({ value, icon }: ItemWeekProps) {
  return (
    <RadioGroupItem value={value}>
      <RadioGroupIndicator />
      <span className="font-medium text-sm text-zinc-300 leading-none">
        {value}x na semana
      </span>
      <span className="text-lg leading-none">{icon}</span>
    </RadioGroupItem>
  )
}

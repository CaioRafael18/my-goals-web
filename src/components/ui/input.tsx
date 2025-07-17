import type * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'h-12 rounded-lg border border-zinc-900 bg-black px-4 text-sm placeholder-zinc-400 outline-none ring-pink-500/10 hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4',
        className
      )}
      data-slot="input"
      type={type}
      {...props}
    />
  )
}

export { Input }

import letsStart from '../assets/lets-start-ilustration.svg'
import logo from '../assets/logo-in-orbit.svg'
import { CreateGoal } from './create-goal'

export function EmptyGoals() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <img alt="in.orbit" src={logo} />
      <img alt="in.orbit" src={letsStart} />
      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <CreateGoal />
    </div>
  )
}

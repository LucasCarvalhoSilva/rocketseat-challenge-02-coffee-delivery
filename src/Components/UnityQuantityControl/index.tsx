import { Plus, Minus } from 'phosphor-react'
import { UnityControlContainer } from './styles'

export function UnityQuantityControl() {
  return (
    <UnityControlContainer heightDimension="big">
      <button>
        <Minus />
      </button>
      <span>1</span>
      <button>
        <Plus />
      </button>
    </UnityControlContainer>
  )
}

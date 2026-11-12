import { Text } from '@/shared/ui'
import './Stepper.css'

type Props = {
  quantity: number
  maxQuantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export const Stepper = ({
  quantity,
  maxQuantity,
  onIncrease,
  onDecrease
}: Props) => {
  return (
    <div className='stepper'>
      <button
        className='stepper-button'
        onClick={() => onDecrease()}
        disabled={quantity <= 1}
      >
        <Text color='light' size='big'>−</Text>
      </button>
      <Text color='light' size='default'>
        {quantity}
      </Text>
      <button
        className='stepper-button'
        onClick={() => onIncrease()}
        disabled={quantity >= maxQuantity}
      >
        <Text color='light' size='big'>+</Text>
      </button>
    </div>
  )
}
import { useRef, useEffect } from 'react'

// eslint-disable-next-line import/prefer-default-export
export const usePrev = props => {
  const ref = useRef()
  useEffect(() => {
    ref.current = props
  }, [])
  return ref.current
}

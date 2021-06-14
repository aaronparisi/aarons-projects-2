import { useState, useEffect, useRef } from 'react'

export function debounce(func, wait, immediate) {
  let timeout;

  const ret = function() {
    let context = this, args = arguments;

    let later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args)
      }
    }

    let callNow = immediate && !timeout;

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) {
      func.apply(context, args)
    }
  }

  return ret;
}

export function useOnScreen({ root = null }) {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer = useRef(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(
      ([entry]) => updateEntry(entry)
    )
    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node)
    
    // Remove the observer as soon as the component is unmounted
    return () => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}

const getWinWidth = () => {
  const { innerWidth: width } = window;
  return width;
}

export const useWinWidth = () => {
  const [winWidth, setWinWidth] = useState(getWinWidth())

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(getWinWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return winWidth
}
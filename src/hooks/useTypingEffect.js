import { useState, useEffect, useRef } from 'react'

export const useTypingEffect = (texts, typingSpeed = 100, erasingSpeed = 50, pauseTime = 1000) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentText = texts[currentIndex]

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false)
        }, pauseTime)
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, erasingSpeed)
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [displayText, isTyping, currentIndex, texts, typingSpeed, erasingSpeed, pauseTime])

  return displayText
}

export const useDualTypingEffect = (nameText, subtitleText) => {
  const [nameDisplay, setNameDisplay] = useState('')
  const [subtitleDisplay, setSubtitleDisplay] = useState('')
  const [showName, setShowName] = useState(true)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const nameIndexRef = useRef(0)
  const subtitleIndexRef = useRef(0)
  const isTypingNameRef = useRef(true)
  const isTypingSubtitleRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const startAnimation = () => {
      if (showName && isTypingNameRef.current) {
        // Typing name
        if (nameIndexRef.current < nameText.length) {
          setNameDisplay(nameText.slice(0, nameIndexRef.current + 1))
          nameIndexRef.current++
          timeoutRef.current = setTimeout(startAnimation, 100)
        } else {
          // Hold name for 1s
          timeoutRef.current = setTimeout(() => {
            isTypingNameRef.current = false
            startAnimation()
          }, 1000)
        }
      } else if (showName && !isTypingNameRef.current) {
        // Erasing name
        if (nameIndexRef.current > 0) {
          nameIndexRef.current--
          setNameDisplay(nameText.slice(0, nameIndexRef.current))
          timeoutRef.current = setTimeout(startAnimation, 100)
        } else {
          setShowName(false)
          setShowSubtitle(true)
          isTypingSubtitleRef.current = true
          startAnimation()
        }
      } else if (showSubtitle && isTypingSubtitleRef.current) {
        // Typing subtitle
        if (subtitleIndexRef.current < subtitleText.length) {
          setSubtitleDisplay(subtitleText.slice(0, subtitleIndexRef.current + 1))
          subtitleIndexRef.current++
          timeoutRef.current = setTimeout(startAnimation, 50)
        } else {
          // Hold subtitle for 700ms
          timeoutRef.current = setTimeout(() => {
            isTypingSubtitleRef.current = false
            startAnimation()
          }, 700)
        }
      } else if (showSubtitle && !isTypingSubtitleRef.current) {
        // Erasing subtitle
        if (subtitleIndexRef.current > 0) {
          subtitleIndexRef.current--
          setSubtitleDisplay(subtitleText.slice(0, subtitleIndexRef.current))
          timeoutRef.current = setTimeout(startAnimation, 40)
        } else {
          setShowSubtitle(false)
          setShowName(true)
          nameIndexRef.current = 0
          subtitleIndexRef.current = 0
          isTypingNameRef.current = true
          timeoutRef.current = setTimeout(startAnimation, 1000)
        }
      }
    }

    const initialTimeout = setTimeout(startAnimation, 1200)

    return () => {
      clearTimeout(initialTimeout)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [nameText, subtitleText, showName, showSubtitle])

  return { nameDisplay, subtitleDisplay, showName, showSubtitle }
}

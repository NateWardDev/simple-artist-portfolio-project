import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimationControls()
  const [element, view] = useInView({ threshold: .4 })

  useEffect(() => {
    if (view) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, view])

  return [element, controls]
}

import { Text, View } from 'react-native'
import {
  GestureEvent,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

interface EmojiStickerProps {
  emoji: string
  size: number
}

type PanGestureContext = {
  translateX: number
  translateY: number
}

const AnimatedText = Animated.createAnimatedComponent(Text)
const AnimatedView = Animated.createAnimatedComponent(View)

export default function EmojiSticker(props: EmojiStickerProps) {
  const { emoji, size } = props
  const scaleText = useSharedValue(size)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const onDoubleTap = useAnimatedGestureHandler<GestureEvent<TapGestureHandlerEventPayload>>({
    onActive: () => {
      if (scaleText.value !== size * 2) {
        scaleText.value = size * 2
      } else {
        scaleText.value = size
      }
    },
  })

  const onDrag = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>,
    PanGestureContext
  >({
    onStart: (_, context) => {
      context.translateX = translateX.value
      context.translateY = translateY.value
    },
    onActive: (event, context) => {
      translateX.value = context.translateX + event.translationX
      translateY.value = context.translateY + event.translationY
    },
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(scaleText.value),
    }
  })

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[animatedViewStyle, { top: -350 }]}>
        <TapGestureHandler numberOfTaps={2} onGestureEvent={onDoubleTap}>
          <AnimatedText style={[animatedStyle, { fontSize: size }]}>{emoji}</AnimatedText>
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  )
}

const SLIDER_CONFIGS = {
  SMALL_SCREEN: {
    slidesPerView: 2,
    rows: 2
  },
  SMALL_TO_MID_SCREEN: {
    slidesPerView: 3,
    rows: 2
  },
  MEDIUM_SCREEN: {
    slidesPerView: 3,
    rows: 3
  },
  MID_TO_LARGE_SCREEN: {
    slidesPerView: 5,
    rows: 2
  },
  LARGE_SCREEN: {
    slidesPerView: 6,
    rows: 2
  }
};

export const DEFAULT_CONFIGS = {
  ...SLIDER_CONFIGS.SMALL_SCREEN
};

export function setScreenSize(width, setterCallback) {
  if (width <= 580) {
    setterCallback(SLIDER_CONFIGS.SMALL_SCREEN);
  } else if (width <= 768) {
    setterCallback(SLIDER_CONFIGS.SMALL_TO_MID_SCREEN);
  } else if (width <= 1024) {
    setterCallback(SLIDER_CONFIGS.MEDIUM_SCREEN);
  } else if (width <= 1200) {
    setterCallback(SLIDER_CONFIGS.MID_TO_LARGE_SCREEN);
  } else {
    setterCallback(SLIDER_CONFIGS.LARGE_SCREEN);
  }
}

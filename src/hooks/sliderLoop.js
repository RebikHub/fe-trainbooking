/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useSliderLoop(counter, num, viewPage) {
  useEffect(() => {
    if (viewPage >= 2262) {
      const carouselInterval = setTimeout(() => counter(num), 5 * 1000);
      return () => clearTimeout(carouselInterval);
    };
  }, [viewPage]);
};
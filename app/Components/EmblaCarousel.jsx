import { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './EmblaCarouselSelectedSnapDisplay';

const Embla = ({ slides, options }) => {
  const emblaRef = useRef(null);
  const [emblaApi, setEmblaApi] = useState(null);

  useEffect(() => {
    if (emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, options);
      setEmblaApi(emblaInstance);
      return () => emblaInstance.destroy();
    }
  }, [options]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <section className="embla w-100 h-100">
      <div className="embla__viewport w-100 pt-0" ref={emblaRef} style={{ height: "fit-content", maxWidth: "unset" }}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{slide}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
      </div>
    </section>
  );
};

export default Embla;
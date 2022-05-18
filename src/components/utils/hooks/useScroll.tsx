import React from 'react';

export const useScroll = () => {

    const [scrollDown, setScrollDown] = React.useState<boolean>(false);
    const [scrollUp, setScrollUp] = React.useState<boolean>(false);
    const [isTopMax, setIsTopMax] = React.useState<boolean>(true);
    const [scrollSpeed, setScrollSpeed] = React.useState<number>(0);

    let timer: any = null;

    const handleListener = (event: any) => {

        setScrollSpeed(~~(event.deltaY / 4));

        if (window.scrollY === 0 && !isTopMax) {
            setIsTopMax(true);
        } else if (window.scrollY !== 0 && isTopMax) {
            setIsTopMax(false);
        }

        if (timer !== null) {
            clearTimeout(timer);

            const scrollingUp = event.wheelDelta > 0;
            const scrollingDown = event.wheelDelta < 0;


            if (scrollingUp && !scrollUp) {
                setScrollUp(true)
            }
            if (scrollingDown && !scrollDown) {
                setScrollDown(true)
            }
        }
        timer = (scrollUp || scrollDown) && setTimeout(() => {
            setScrollUp(false)
            setScrollDown(false)
        }, 150);
    }

    React.useEffect(() => {
        document.addEventListener('wheel', handleListener);
        return () => document.removeEventListener('wheel', handleListener);
    });

    return { scrollUp, scrollDown, scrollSpeed, isTopMax };
}
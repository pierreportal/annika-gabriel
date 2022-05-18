import React from 'react';
import { useInterval } from '../../utils/hooks/useInterval';
import { SliderContainer, SliderInnerContainer, SliderItem } from './styles';

interface ISliderProps {
    children: Array<React.ReactElement>
    width: number
    height: number
    delay: number
}

export const Slider: React.FunctionComponent<ISliderProps> = ({ children, width, height, delay }) => {

    const [count, setCount] = React.useState<number>(0);

    useInterval(() => setCount((count + 1) % children.length), delay);

    const sliderContent = children.map((child: React.ReactElement, index: number) => {
        return <SliderItem width={width} key={index}>{child.props.children}</SliderItem>
    });

    return (
        <SliderContainer width={width} height={height}>
            <SliderInnerContainer offsetX={width * count}>
                {sliderContent}
            </SliderInnerContainer>
        </SliderContainer>
    )
}
import React from 'react';
import { useInterval } from '../../utils/hooks/useInterval';
import { SliderContainer, SliderInnerContainer, SliderItem } from './styles';

interface ISliderProps {
    children: Array<React.ReactElement>
    width: number
    height: number
    delay: number
}

export const SliderLoop: React.FunctionComponent<ISliderProps> = ({ children, width, height, delay }) => {

    const [listItem, setListItem] = React.useState<Array<React.ReactElement>>(children);
    const [count, setCount] = React.useState<number>(0);

    useInterval(() => {
        setCount((count + 1));
        if (count % 2 !== 0) {
            const items = [...listItem];
            const firstItem = items.shift()!;
            setListItem([...items, firstItem])
        }
    }, delay / 2);


    const sliderContent = listItem.map((child: React.ReactElement, index: number) => {
        return <SliderItem width={width} key={index}>{child.props.children}</SliderItem>
    });

    return (
        <SliderContainer width={width} height={height}>
            <SliderInnerContainer offsetX={count % 2 === 0 ? 0 : width} transition={count % 2 !== 0}>
                {sliderContent}
            </SliderInnerContainer>
        </SliderContainer>
    )
}
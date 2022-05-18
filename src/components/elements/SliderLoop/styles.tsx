import styled from 'styled-components';
import { Row } from '../../../uiKit';

interface ISliderContainerProps {
    width: number
    height: number
}
interface ISliderItemProps {
    width: number
}
interface ISliderInnerContainerProps {
    offsetX: number
    transition: boolean
}

export const SliderContainer = styled.div`
    position: relative;
    width: ${(props: ISliderContainerProps) => props.width + 'px'};
    min-height: ${(props: ISliderContainerProps) => props.height + 'px'};
    background-color: lightpink;
    overflow: hidden;
`;

export const SliderInnerContainer = styled(Row)`
    position: absolute;
    border: solid 2px red;
    height: 100%;
    transition: ${(props: ISliderInnerContainerProps) => props.transition ? 'transform .5s ease' : 'none'};
    transform: translateX(${(props: ISliderInnerContainerProps) => -props.offsetX + 'px'});
`;

export const SliderItem = styled.div`
    height: 100%;
    width: ${(props: ISliderItemProps) => props.width + 'px'};
`;
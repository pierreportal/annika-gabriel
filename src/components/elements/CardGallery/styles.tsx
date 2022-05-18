import styled from 'styled-components';
import { Column } from '../../../uiKit';

interface ICardGalleryContainerProps {
    selected: boolean
    width: number;
    height: number;
}

export const CardGalleryContainer = styled(Column)`
    padding: 10px;
    position: relative;
    min-height: ${(props: ICardGalleryContainerProps) => props.height * (1 + Number(props.selected)) + 'px'};
    width: ${(props: ICardGalleryContainerProps) => props.width + 'px'};
    justify-content: center;
    border: solid 1px red;
    transition: min-height ease .5s;
`;

interface ICardGallerytemProps {
    index: number
    offset: number
    radius: number
    height: number
    animateOut: boolean
    animateIn: boolean
}

const getRotationAngle = (index: number) => {
    return index % 2 === 0 ? -1 : 1
}

const getTopPosition = (props: ICardGallerytemProps) => {
    const { animateOut, animateIn, index, offset } = props
    if (animateIn) return 0;
    if (animateOut) return `calc(50% + ${index * offset}px)`;
    return `${index * offset}px`;
};

export const CardGallerytem = styled.div`
    padding: 20px;
    position: absolute;
    height: ${(props: ICardGallerytemProps) => /*props.animateOut ? '5px' : props.animateIn ? 'calc(100%)' :*/ props.height + 'px'};
    overflow: hidden;
    width: 100%;
    transform: rotate(${(props: ICardGallerytemProps) => props.animateIn || props.animateOut ? 0 : Math.random() * 5}deg);
    border: solid 2px white;
    background-color: lightblue;
    border-radius: ${(props: ICardGallerytemProps) => props.radius}px;
    cursor: pointer;
    transition: top ease .5s, transform ease .5s, height ease .5s;
    top: ${(props: ICardGallerytemProps) => getTopPosition(props)};
    left: 0;
    // pointer-events: ${(props: ICardGallerytemProps) => props.animateOut ? 'none' : 'default'};
    
    &:hover {
        transform: rotate(${(props: ICardGallerytemProps) => !props.animateIn && getRotationAngle(props.index)}deg);
    }
    &:not(:last-child):hover {
        top: ${(props: ICardGallerytemProps) => !props.animateIn && !props.animateOut && props.index * props.offset - 10 + 'px'};
    }
`;
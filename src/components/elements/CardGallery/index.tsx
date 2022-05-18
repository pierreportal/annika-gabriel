import React from 'react';
import { CardGalleryContainer, CardGallerytem } from './styles';

interface ICardGalleryProps {
    children: Array<React.ReactElement>
    width: number
    height: number
    radius: number
    offset: number
}

export const CardGallery: React.FunctionComponent<ICardGalleryProps> = ({ children, width, height, radius, offset }) => {

    const [selectedCardIndex, setSlectedCardIndex] = React.useState<number | null>(null);

    const expandSelectedCard = (index: number) => {
        setSlectedCardIndex(index);
    }

    const handleCloseItem = (event: any) => {
        event.stopPropagation();
        setSlectedCardIndex(null)
    }

    const cards = children.map((child: React.ReactElement, index: number) => {
        const animateOut = selectedCardIndex !== null && selectedCardIndex !== index;
        const animateIn = selectedCardIndex !== null && selectedCardIndex === index;

        return (
            <CardGallerytem
                key={index}
                height={height}
                index={index}
                offset={offset}
                radius={radius}
                animateOut={animateOut}
                animateIn={animateIn}
                onClick={() => expandSelectedCard(index)}
            >
                {animateIn && <button onClick={handleCloseItem}>close</button>}
                {child.props.children}
            </CardGallerytem>
        )
    })

    const containerHeight = height + offset * (children.length - 1);

    return <CardGalleryContainer selected={selectedCardIndex !== null} width={width} height={containerHeight}>{cards}</CardGalleryContainer>
}
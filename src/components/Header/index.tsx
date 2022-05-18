import React from 'react';
import { Navigation } from '../Navigation';
import { HeaderTopBar } from './styles';

interface IHeaderProps {
    maxHeight: number
    minHeight: number
}

export const Header: React.FunctionComponent<IHeaderProps> = ({ maxHeight, minHeight }) => {

    const [scrollTopDistance, setScrollTopDistance] = React.useState<number>(window.pageYOffset);

    const handleScroll = () => setScrollTopDistance(window.pageYOffset);

    React.useEffect(() => {
        setScrollTopDistance(window.pageYOffset)
        document.addEventListener('wheel', handleScroll);
        return () => document.removeEventListener('wheel', handleScroll);
    }, [])

    return <HeaderTopBar maxHeight={maxHeight} minHeight={minHeight} scrollTopDistance={scrollTopDistance}>
        <Navigation />
    </HeaderTopBar>
}
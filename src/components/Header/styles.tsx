import styled from 'styled-components';

interface IHeaderTopBarProps {
    scrollTopDistance: number
    maxHeight: number
    minHeight: number
}
export const HeaderTopBar = styled.header`
    position: fixed;
    z-index: 3;
    width: 100vw;
    min-height: ${(props: IHeaderTopBarProps) => Math.max(props.minHeight, props.maxHeight - props.scrollTopDistance)}px;
    border-bottom: solid 3px green;
    background-color: white;
    & + main {
        margin-top: ${(props: IHeaderTopBarProps) => props.maxHeight}px;
        background-color: red
    }
`;
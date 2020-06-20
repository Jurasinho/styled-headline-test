import styled from 'vue-styled-components';

const headlineMainProps = { forcedDown: Boolean }

export const headlineMain = styled('h1', headlineMainProps)`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: ${props => !props.forcedDown ? '48px' : '32px'};
    line-height: ${props => !props.forcedDown ? '64px' : '40px'};
    color: ${props => !props.forcedDown ? '#000000' : '#9A9B9C'};
`;

export const headline1 = styled('h1')`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 56px;
`;

export const mobileHeadline1 = styled(headline1)`
    font-size: 24px;
    line-height: 32px;
`;

export const responsiveHeadline = styled('h1')`
    font-size: 32px;
    line-height: 40px;
    
    @media (min-width: 576px){
        font-size: 48px;
        line-height: 64px;
    }
`

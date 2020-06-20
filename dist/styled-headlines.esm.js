import styled from 'vue-styled-components';

const headlineMainProps = {
  forcedDown: Boolean
};
const headlineMain = styled('h1', headlineMainProps)`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: ${props => !props.forcedDown ? '48px' : '32px'};
    line-height: ${props => !props.forcedDown ? '64px' : '40px'};
    color: ${props => !props.forcedDown ? '#000000' : '#9A9B9C'};
`;
const headline1 = styled('h1')`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 56px;
`;
const mobileHeadline1 = styled(headline1)`
    font-size: 24px;
    line-height: 32px;
`;
const responsiveHeadline = styled('h1')`
    font-size: 32px;
    line-height: 40px;
    
    @media (min-width: 576px){
        font-size: 48px;
        line-height: 64px;
    }
`;

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    headlineMain: headlineMain,
    headline1: headline1,
    mobileHeadline1: mobileHeadline1,
    responsiveHeadline: responsiveHeadline
});

// Import vue components

const install = function installStyledHeadlines(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { headline1, headlineMain, mobileHeadline1, responsiveHeadline };

/**
 * Configuration for `fds-icons` build scripts
 */

const { ICONS_ROOT, LIB_ROOT } = require('../constants.js');

const PATH_ICONS_LIB = `${LIB_ROOT}/icons`;

module.exports = {
  // Options for exporting icons from sketch
  sketchConfig: {
    pageName: 'Icons',
    slicePrefix: 'icon/',
  },

  // paths used by build scripts
  buildConfig: {
    svg: {
      src: `${ICONS_ROOT}/svg`,
      lib: `${PATH_ICONS_LIB}/svg`,
    },
    png: {
      src: `${ICONS_ROOT}/png`,
      lib: `${PATH_ICONS_LIB}/png`,
    },
    react: {
      src: `${ICONS_ROOT}/svg`,
      lib: `${ICONS_ROOT}/react`,
      template: `${ICONS_ROOT}/templates/reactComponent.hbs`,
    },
    docs: {
      input: `${ICONS_ROOT}/svg`, // used to build manifest of svg strings
      output: `${ICONS_ROOT}`, // manifest destination
    },
  },
};

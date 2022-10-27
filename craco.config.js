module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
            @import "src/_variables.scss";
        `,
      },
    },
  },
};

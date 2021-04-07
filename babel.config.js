// var plugins = [];
// if (['production', 'prod'].includes(process.env.NODE_ENV)) {
//   plugins.push("transform-remove-console")
// }
const  prodplugins = []
if(process.env.NODE_ENV ==='production') {
  prodplugins.push('transform-remove-console')
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
      ...prodplugins
  // presets: ["@vue/cli-plugin-babel/preset"]
  // presets: [
  //   [
  //     "@vue/cli-plugin-babel/preset",
  //     {
  //       "useBuiltIns": "entry",
  //       polyfills: [
  //         'es6.promise',
  //         'es6.symbol'
  //       ]
  //     }
  //   ]
  // ],
  // plugins: plugins
};


module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
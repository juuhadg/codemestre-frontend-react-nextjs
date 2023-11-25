
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
      remotePatterns: [
        {
          protocol:'https',
          hostname:'lh3.googleusercontent.com',
          port:'',
          pathname: '/a/**'
        },
        {
          protocol:'http',
          hostname:'res.cloudinary.com',
          port:'',
          pathname: '/dcujz8hfz/image/upload/**'
        },

      ]
  }
}
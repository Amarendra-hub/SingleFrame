import withMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  }

  export default withMDX({
    extension: /\.mdx?$/,
    })(nextConfig)


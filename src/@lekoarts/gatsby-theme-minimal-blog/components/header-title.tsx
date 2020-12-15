/** @jsx jsx */
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import "fontsource-courier-prime";
import { Link } from "gatsby";
import { jsx, useColorMode } from "theme-ui";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ fontFamily: "Courier Prime", my: 0, fontWeight: `medium`, fontSize: [4, 5] }}>kaan{" "}

        <div sx={{
          display: 'inline-block',
          backgroundColor: theme => theme.colors.heading,
          color: theme => theme.colors.background,
          padding: "0 1px",
          margin: "0 1px",
          height: ["1.8rem", "2.2rem"]
        }}
        >
          uz
        </div>

      dogan</div>
    </Link>
  )
}

export default HeaderTitle
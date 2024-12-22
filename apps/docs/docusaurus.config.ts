import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import path from "path";

const config: Config = {
  title: "TomT-Plus",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // GitHub Pages URL設定
  url: "https://tsutom-t.github.io",
  baseUrl: "/my-docusaurus/",
  organizationName: "tsutom-t",
  projectName: "my-docusaurus",
  trailingSlash: true,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  customFields: {
    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve("swc-loader"),
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            target: "es2017",
          },
          module: {
            type: isServer ? "commonjs" : "es6",
          },
        },
      }),

      configure: (config, isServer, utils) => {
        config.resolve.alias = {
          ...config.resolve.alias,
          "@": path.resolve(__dirname, "./src"),
        };

        config.module.rules.push({
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve("swc-loader"),
              options: {
                jsc: {
                  parser: {
                    syntax: "typescript",
                    tsx: true,
                  },
                  target: "es2017",
                },
              },
            },
          ],
        });

        return config;
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/tsutom-t/my-docusaurus/tree/main/apps/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/tsutom-t/my-docusaurus/tree/main/apps/docs/blog/",
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateTime: true,
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          onInlineTags: "warn",
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "TomT-Plus",
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/financial-prediction-ai-assistant/development-strategy",
          label: "Docs",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/tsutom-t/my-docusaurus",
          position: "right",
          className: "header-github-icon",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/financial-prediction-ai-assistant/development-strategy",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              html: `
            <a
              class="footer-github-icon"
              href="https://github.com/tsutom-t/my-docusaurus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
            </a>
          `,
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Site, Inc. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

export default defineNuxtConfig({
  devServer: {
    port: 7001,
  },
  compatibilityDate: "2024-10-24",
  ssr: true,
  nitro: {
    routeRules: {
      "/**": { headers: { "Cache-Control": "public" } },
    },
  },
  app: {
    head: {
      script: [{ src: "/datafeeds/udf/dist/bundle.js" }],
      htmlAttrs: {
        lang: "en",
      },
      title: "SpinnerCoin",
      meta: [
        {
          name: "description",
          content:
            "SpinnerCoin is a Mini App in Telegram that lets you engage with fidget spinners on the blockchain! Each spinner is an NFT on the TON blockchain, making them collectible and tradable in a fun and interactive way",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },
});

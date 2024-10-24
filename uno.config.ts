// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [
      // ...
    ],
    theme: {
      colors: {
        // ...
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
          // ...
        },
      }),
    ],
    rules:[
        ['flex',{display:"flex"}],
        ['red',{color:"red"}],
        // [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // you could still have object style
    {
      btn: 'py-2 px-4 font-semibold rounded-lg shadow-md cursor-pointer',
    },
    // dynamic shortcuts
    [
      /^btn-(.*)$/,
      ([, c]) =>
        `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg cursor-pointer`,
    ],
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

const defaultConfig = require('tailwindcss/defaultConfig');

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

const colors = {
    transparent: 'transparent',

    black: 'rgb(0, 0, 0)',

    white: 'rgb(255, 255, 255)',
    'white-25': 'rgb(255, 255, 255, 0.25)',
    'white-40': 'rgba(255, 255, 255, 0.4)',
    'white-90': 'rgba(255, 255, 255, 0.9)',

    dark: 'rgb(0, 22, 39)', // #001627
    light: 'rgb(249, 249, 249)',

    blue: 'rgb(0, 87, 155)', // #00579b
    'blue-green': 'rgb(17,92,102)', // #115C66
    'blue-legacy': 'rgb(45, 159, 209)',
    'blue-legacy-80': 'rgba(45, 159, 209, 0.8)',

    'cyan-dark': 'rgb(30,161,179)', // #1EA1B3
    cyan: 'rgb(38, 198, 218)', // #26C6DA
    'cyan-light': 'rgb(98, 211, 226)',

    'grey-darker': 'rgb(79, 109, 122)',
    'grey-darker-10': 'rgba(79, 109, 122, 0.1)',
    'grey-darker-30': 'rgba(79, 109, 122, 0.3)',
    'grey-darker-40': 'rgba(79, 109, 122, 0.4)',
    'grey-darker-50': 'rgba(79, 109, 122, 0.5)',
    'grey-darker-80': 'rgba(79, 109, 122, 0.8)',

    'grey-dark': 'rgb(114, 138, 149)', // #728a95
    'grey-dark-60': 'rgba(114, 138, 149, 0.6)',
    'grey-dark-80': 'rgb(114, 138, 149, 0.8)',

    grey: 'rgb(192, 214, 223)',
    'grey-35': 'rgba(192, 214, 223, 0.35)',
    'grey-50': 'rgba(192, 214, 223, 0.5)',
    'grey-80': 'rgba(192, 214, 223, 0.8)',

    'grey-light': 'rgb(219, 232, 238)',
    'grey-light-35': 'rgb(219, 232, 238, 0.35)',
    'grey-light-50': 'rgb(219, 232, 238, 0.5)',
    'grey-light-80': 'rgb(219, 232, 238, 0.8)',

    'grey-lighter': 'rgb(243, 247, 249)',

    'grey-tag': 'rgb(233,241,245)', // #e9f1f5

    'red-dark': 'rgb(184, 0, 54)',
    red: 'rgb(255, 37, 47)', // #ff252f

    yellow: 'rgb(230, 170, 40)', // #e6aa28
    'yellow-darker': 'rgb(204, 150, 35)', // #cc9623

    green: 'rgb(20, 204, 97)',
    'green-dark': 'rgb(16, 171, 80)', // #10AB50
    
    'peacock-blue': 'rgb(0, 87, 155)', // #00579b

    'apple-green': 'rgb(126, 211, 33)', // #7ed321
    'apple-green-darker': 'rgba(106, 179, 29)',

    tealish: 'rgb(30, 161, 179)', // #1ea1b3
    squash: 'rgb(230, 170, 40)',
};

const objectFitProperty = function(variants) {
    return function({ addUtilities }) {
        addUtilities(
            {
                '.object-contain': { objectFit: 'contain' },
                '.object-cover': { objectFit: 'cover' },
                '.object-fill': { objectFit: 'fill' },
                '.object-none': { objectFit: 'none' },
                '.object-scale': { objectFit: 'scale-down' },
            },
            variants
        );
    };
};

module.exports = {
    /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */
    colors,
    /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

    screens: {
        phone: '412px',
        tablet: '768px',
        desktop: '1024px',
        widescreen: '1280px',
        fullhd: '1440px',
    },

    /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

    fonts: {
        sans: [
            'SourceSansPro',
            'system-ui',
            'BlinkMacSystemFont',
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ],
        serif: [
            'Constantia',
            'Lucida Bright',
            'Lucidabright',
            'Lucida Serif',
            'Lucida',
            'DejaVu Serif',
            'Bitstream Vera Serif',
            'Liberation Serif',
            'Georgia',
            'serif',
        ],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },

    /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

    textSizes: {
        '7': '0.75rem', // 12px
        '6': '0.875rem', // 14px
        '5': '1rem', // 16px
        '4': '1.125rem', // 18px
        '3': '1.25rem', // 20px
        '2': '1.875rem', // 30px
        '1': '2.875rem', // 46px
    },

    /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },

    /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

    leading: {
        none: 1,
        tight: 1.25,
        bootstrap: 1.44,
        normal: 1.5,
        'normal-loose': 1.75,
        loose: 2,
        '4': '1.25rem', // 20px
    },

    /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

    tracking: {
        tight: '-0.05em',
        normal: '0.2px',
        wide: '0.05em',
        '5': '0.5px',
    },

    /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

    textColors: colors,

    /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

    backgroundColors: colors,

    /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  |
  */

    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
    },

    /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

    borderWidths: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '16': '16px',
    },

    /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

    borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

    /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

    borderRadius: {
        none: '0',
        sm: '.125rem', // 2px
        normal: '.1875rem', // 3px
        default: '.25rem', // 4px
        lg: '.5rem', // 8px
        full: '9999px',
    },

    /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

    width: {
        auto: 'auto',
        px: '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '3-3/4': '0.9rem',
        '4': '1rem', // 16px
        '4-1/2': '1.125rem', // 18px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '9': '2.25rem', // 36px
        '10': '2.5rem', // 40px
        '10-1/2': '2.625rem', // 42px
        '11':'2.75rem',
        '12': '3rem', // 48px
        '13': '3.25rem', // 52px
        '14': '3.5rem', // 56px
        '16': '4rem', // 64px
        '18': '4.5rem', // 72px
        '20': '5rem',
        '24': '6rem', // 96px
        '26': '6.5rem', // 104px
        '28': '7rem',
        '32': '8rem',
        '35': '8.75rem', // 140px
        '39-2/5': '9.875rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '178-3/4': '44.6875rem',
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.66667%',
        '5/6': '83.33333%',
        full: '100%',
        screen: '100vw',
    },

    /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

    height: {
        auto: 'auto',
        px: '1px',
        '1': '0.25rem',
        '2': '0.5rem',
        '2-1/2': '0.625em',
        '3': '0.75rem',
        '4': '1rem', // 16px
        '4-1/2': '1.125rem', // 18px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '7-1/2': '1.875rem', // 30px
        '8': '2rem', // 32px
        '9': '2.25rem', // 36px
        '10': '2.5rem', // 40px
        '11': '2.75rem',
        '12': '3rem', // 48px
        '13': '3.25rem', // 52px
        '14': '3.5rem', // 56px
        '16': '4rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '20': '5rem', // 80px
        '22': '5.5rem', // 88px
        '24': '6rem',
        '26': '6.5rem',
        '32': '8rem',
        '35': '8.75rem', // 140px
        '39-2/5': '9.875rem',
        '42': '10.5rem', // 168px
        '48': '12rem',
        '60': '15rem',
        '64': '16rem',
        '76-1/2': '19.125rem',
        '85': '21.25rem', // 340px
        full: '100%',
        screen: '100vh',
    },

    /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

    minWidth: {
        '0': '0',
        '3-3/4': '0.9rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '10': '2.5rem', // 40px
        '31-1/2': '7.5rem',
        '40': '10rem',
        '48': '12rem',
        full: '100%',
    },

    /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

    minHeight: {
        '0': '0',
        '32': '8rem',
        '40': '10rem',
        '41': '10.25rem',
        '60': '15rem',
        '64': '16rem',
        '69': '17.25rem',
        full: '100%',
        screen: '100vh',
    },

    /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

    maxWidth: {
        '5': '1.25rem',
        '80': '20rem',
        '84': '21rem', // 336px
        '120': '30rem',
        full: '100%',
    },

    /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

    maxHeight: {
        '12': '3rem', // 48px
        '22': '5.5rem',
        '60': '15rem',
        full: '100%',
        screen: '100vh',
    },

    /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

    padding: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '1-1/2': '0.375rem',
        '2': '0.5rem', // 8px
        '2-1/2': '0.625rem', // 10.8px
        '3': '0.75rem', // 12px
        '4': '1rem', // 16px
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9-1/2': '2.125rem', // 38px
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '15-1/2': '3.875rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
    },

    /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

    margin: {
        auto: 'auto',
        px: '1px',
        '0': '0',
        '0-3/4': '0.2rem',
        '1': '0.25rem',
        '1-1/2': '0.375rem',
        '2': '0.5rem', // 8px
        '2-1/2':'0.625rem', // 10px
        '3': '0.75rem', // 12px
        '4': '1rem', // 16px
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem', // 56px
        '15': '3.75rem', // 60px
        '16': '4rem', // 64px
        '20': '5rem',
        '24': '6rem',
        '32': '8rem', // 128px
    },

    /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

    negativeMargin: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '3/2': '0.375rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
    },

    /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

    shadows: {
        'button-hover': '0 5px 15px -2px rgba(0, 22, 39, 0.35)',

        card: '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1)',
        'card-hover':
            '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1),' +
            ' 0 10px 30px 0 rgba(0, 22, 39, 0.35)',

        'campaign-metric': '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1), ' +
            '0 5px 15px 0 rgba(0, 22, 39, 0.15)',

        default: '0 2px 4px 0 rgba(0,0,0,0.10)',
        sm: '0 1px 2px 0 rgba(79, 109, 122, 0.05), 0 1px 3px 0 rgba(79, 109, 122, 0.1)',
        md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(52,144,220,0.5)',
        none: 'none',
    },

    /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

    zIndex: {
        auto: 'auto',
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
    },

    /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

    opacity: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '100': '1',
    },

    /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

    svgFill: {
        current: 'currentColor',
    },

    /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  |
  */

    svgStroke: {
        current: 'currentColor',
    },

    /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

    modules: {
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColors: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: [],
        borderColors: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidths: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        flexbox: ['responsive'],
        float: ['responsive'],
        fonts: ['responsive'],
        fontWeights: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        leading: ['responsive'],
        lists: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        negativeMargin: ['responsive'],
        opacity: ['responsive'],
        outline: ['focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        shadows: ['responsive', 'hover', 'focus'],
        svgFill: [],
        svgStroke: [],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColors: ['responsive', 'hover', 'focus'],
        textSizes: ['responsive'],
        textStyle: ['responsive', 'hover', 'focus'],
        tracking: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        zIndex: ['responsive'],
    },

    /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

    plugins: [
      objectFitProperty(['responsive']),
    ],

    /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

    options: {
        prefix: '',
        important: false,
        separator: ':',
    },
};

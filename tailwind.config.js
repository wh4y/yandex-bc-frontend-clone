module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'code-wallpaper': 'url("https://pbs.twimg.com/profile_banners/109950549/1498650323/1500x500")'
            },
            fontFamily: {
                'main': ['"YS Text"','Helvetica','Arial','sans-serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

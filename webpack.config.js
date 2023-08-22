const path = require('path'); /* Esto es algo x de NodeJs */
const glob = require('glob'); // Para no poner los entry de manera manual

function getEntryPoints() {
    const entryPoints = {};
    const files = glob.sync('./Src/**/*.ts');

    files.forEach(file => {
        const relativePath = path.relative(__dirname, file);
        const entryName = path.basename(file, '.ts');
        entryPoints[entryName] = `./${relativePath}`;
    });

    return entryPoints;
}

module.exports = {
    entry: getEntryPoints(),
    output: {
        /* Para ver donde tirar el lenguaje de maquina */
        path: path.resolve(__dirname, 'Dist'), // Directorio de salida para los archivos generados
        filename: '[name].bundle.js', // Nombre del archivo bundle generado
    },
    watch: true, /* Esto es para usar live server */
    devtool: 'source-map', /* Esto es para crear un archivo para depurar el lenguaje de maquina */
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"),
            os: require.resolve("os-browserify/browser"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify")
        },
    },
    
};

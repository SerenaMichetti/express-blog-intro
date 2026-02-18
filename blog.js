console.log('Welcome to my blog!')

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to my first blog!')
})

app.get('/home', (req, res) => {

    const posts = [
        {
            title: "Alla scoperta del trekking urbano",
            description: "Esplorare la città a piedi non è solo esercizio, ma un modo per scoprire angoli nascosti e storie dimenticate tra i vicoli del centro.",
            image: "/img/trekking-urbano.jpg",
            tags: ["benessere", "città", "viaggi"]
        },
        {
            title: "10 Ricette veloci per smart working",
            description: "Il tempo è poco ma la fame è tanta? Ecco una selezione di piatti sani e bilanciati pronti in meno di 15 minuti.",
            image: "/img/pasti-smart.jpg",
            tags: ["cucina", "produttività", "salute"]
        },
        {
            title: "Guida definitiva al minimalismo digitale",
            description: "Come riprendere il controllo del proprio tempo limitando le notifiche e organizzando al meglio lo spazio sui nostri dispositivi.",
            image: "/img/minimalismo-digitale.jpg",
            tags: ["tecnologia", "lifestyle", "focus"]
        },
        {
            title: "L'ascesa dei giardini verticali",
            description: "Anche in un piccolo appartamento è possibile creare un'oasi verde. Scopriamo quali piante scegliere e come curarle.",
            image: "/img/giardino.jpg",
            tags: ["green", "arredamento", "fai-da-te"]
        },
        {
            title: "I segreti del caffè perfetto a casa",
            description: "Dalla scelta della miscela alla temperatura dell'acqua: tutto quello che devi sapere per un espresso da bar nella tua cucina.",
            image: "/img/caffè.jpg",
            tags: ["lifestyle", "caffè", "consigli"]
        }
    ];

    res.json(posts)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
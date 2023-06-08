import react, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Contacthehe from '@/comps/COntact/Contact'

const typeTheme = [
    {
        name: 'gd',
        title: 'Graphic Designing',
        img: 'https://wallpapercave.com/wp/wp2393306.jpg'
    },
    {
        name: 'mp',
        title: 'Music Production',
        img: 'https://wallpapercave.com/wp/wp5409375.jpg'
    },
    {
        name: 'gm',
        title: 'Graphics Motion',
        img: "https://hdqwalls.com/download/graphic-design-vector-nb-2880x1800.jpg"
    },
    {
        name: 'wd',
        title: 'Web Development',
        img: "https://wallpapercave.com/wp/wp6784380.jpg"
    },
    {
        name: 've',
        title: 'Video Editing',
        img: "https://wallpapercave.com/wp/wp7110639.jpg"
    },
    {
        name: 'sma',
        title: 'Social Media Advertisement',
        img: "https://wallpapercave.com/wp/wp6626570.jpg"
    }
]

function Project() {
    var router = useRouter()
    var [type, setType] = react.useState('')
    var [title, setTitle] = react.useState('')
    var [imgUrl, setImgUrl] = react.useState('')
    function load(src) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', resolve);
            image.addEventListener('error', reject);
            image.src = src;
        });
    }
    var [showForm, setShowForm] = react.useState(false)


    useEffect(() => {
        if (router.query.name) {
            setType(router.query.name)
            var rout = router.query.name
            // check if rout is in typeTheme's name
            var check = typeTheme.find((e) => e.name === rout)

            if (check) {
                setImgUrl(check.img)
                const image = check.img;
                load(image).then(() => {
                    setShowForm(true)
                });
                setTitle(check.title)
            } else {
                router.push('/order')
            }
        }
    }, [router.query.name])

    return (
        <div className="orderCart" style={{ backgroundImage: `url(${imgUrl})` }}>
            <Head>
                <title> {title} | Order</title>
                <meta name="description" content="Order | Advancable" />
            </Head>
            {(showForm) && <div className="orderForm">
                <Contacthehe
                    subject={title}
                />
            </div>
            }
        </div>
    )
}


export default Project
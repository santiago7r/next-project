import Image from "next/image";

interface Iproduct {
    id: string;
    url: string;
    title: string;
}

export default async function Products() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const products: Iproduct[] = await res.json()
    
    return (
        <ul>
            { products.map(product =>
                <li key={product.id}>
                    <img src={product.url} alt={product.title}/>
                </li>
             )

            }
        </ul>
    )
}
import React from 'react'


export default function BioProducts() {
    const products = [
        {
          id: 1,
          name: 'Osmocote Fertilizer',
          href: '#',
          price: 'रु 100',
          imageSrc: './small.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Vermicompost Ferilizer',
          href: '#',
          price: 'रु 50',
          imageSrc: './chemical.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Tomato fertilizer',
          href: '#',
          price: 'रु 189',
          imageSrc: './from.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Oragnic',
          href: '#',
          price: 'रु 200',
          imageSrc: './hand.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        
      ]
      
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="object-cover object-center group-hover:opacity-75 aspect-w-1 aspect-h-1"
    />
</div>
<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

              </a>
            ))}
          </div>
        </div>
      </div>
    );
}
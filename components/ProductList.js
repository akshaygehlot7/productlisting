export default function ProductList ({products, onSelect}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border border-black rounded-xl p-4 cursor-pointer" onClick={() => onSelect(product)}>
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover border border-y-black rounded-xl" />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-sm">${product.price}</p>
        </div>
      ))}
    </div>
  )
}


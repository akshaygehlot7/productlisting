export default function ProductModal ({product, onClose}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 max-w-md w-full rounded relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">×</button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-lg">${product.price}</p>
        <p className="mt-2">{product.description}</p>
      </div>
    </div>
  )
}


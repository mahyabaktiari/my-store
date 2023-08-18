import Image from 'next/image';
import { IProduct } from './Products.type';

const Products = ({ data }: any) => {
  console.log('data', data);
  return (
    <div className='grid grid-cols-4 gap-12 p-16'>
      {data?.map((product: IProduct) => (
        <div className='flex flex-col gap-6 rounded-xl bg-white p-4 text-neutral-700 shadow-md' key={product.id}>
          <div>
            <p className='font-bold'>{product.title}</p>
            <p className='text-sm text-neutral-400'>{product.category}</p>
          </div>
          <div className='flex min-h-[300px] justify-center'>
            <Image src={product.image} className='object-contain' alt='image' width={150} height={300} />
          </div>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

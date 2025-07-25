"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/component/Header';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/component/Footer';

function DryFruitDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Form state
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [remark, setRemark] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('selectedProduct');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.id == id) {
        setProduct(parsed);
      }
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!quantity || !name || !contact) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/sendOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName: product.name,
          name,
          contact,
          address,
          quantity,
          remark,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setContact('');
        setAddress('');
        setQuantity('');
        setRemark('');
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert('Order failed to send.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Something went wrong!');
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="container mt-5">
        {success && (
          <div className="bg-green-600 text-white text-center py-2 z-50 shadow-md transition-all mb-4 duration-300">
            ✅ Your order has been submitted successfully!
          </div>
        )}

        <div className='breadcumb mb-3'>
          <ul className='flex gap-[8px]'>
            <Link href={'/'}><li className='text-black'>Home</li></Link>
            <li>/</li>
            <li className='font-bold'>{product.name}</li>
          </ul>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <Image src={`/Images/${product.image}`} alt={product.name} width={500} height={300} />
          </div>

          <div className='col-sm-6'>
            <p className="text-[20px] sm:text-[18px] md:text-[25px] font-bold mb-2 mt-2">{product.name}</p>
            <hr />
            <p className="mt-2">{product.desc}</p>

            <form onSubmit={handleSubmit}>
              <label className="mt-3">Name:</label>
              <input
                type='text'
                className='!w-[70%] form-control'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="mt-3">Contact No.:</label>
              <input
                type='text'
                className='!w-[70%] form-control'
                placeholder='Enter Contact'
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />

              <label className='mt-4'>Address:</label>
              <textarea
                className='!w-[70%] form-control'
                placeholder='Enter Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <label className="mt-3">Quantity (kg):</label>
              <input
                type='text'
                className='!w-[70%] form-control'
                placeholder='Enter Quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <label className='mt-4'>Remark:</label>
              <textarea
                className='!w-[70%] form-control'
                placeholder='Enter instructions if any'
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />

              <br />
              <button type='submit' className='btn btn-success p-2'>Submit</button>
            </form>

            <hr />
            <p className='!mb-0 underline'>
              <strong className='text-red-500'>टीप:</strong> एकदा तुमची ऑर्डर आम्हाला प्राप्त झाली की, आम्ही लवकरच तुमच्याशी संपर्क साधू. तुम्हाला होम डिलिव्हरी हवी असल्यास, त्यासाठी काही अतिरिक्त शुल्क लागू शकते.
            </p>

            <p className='mt-3 !mb-0 underline'>
              <strong className='text-red-500'>Note:</strong> Once we receive your order, we will contact you shortly. If you prefer home delivery, additional charges may apply.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DryFruitDetail;

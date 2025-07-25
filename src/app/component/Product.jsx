"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

function Product() {
  const router = useRouter();

  // const dryFruit = [
  //   { id: 1, name: 'Almonds (बादाम)', image: 'almod.jpeg', desc: 'Cashews are crescent-shaped, creamy nuts with a buttery flavor. They are rich in magnesium, iron, and healthy fats. Popular in both sweet and savory dishes across cultures. They also help boost energy and support bone health.' },
  //   { id: 2, name: 'Pista (पिस्ता)', image: 'Cash.png', desc: 'Cashews are crescent-shaped, creamy nuts with a buttery flavor. They are rich in magnesium, iron, and healthy fats. Popular in both sweet and savory dishes across cultures. They also help boost energy and support bone health.' },
  //   { id: 3, name: 'Walnuts (अखरोट)', image: 'nuts.jpeg', desc: 'Walnuts have a brain-like shape and a mildly bitter earthy taste. They are a great source of omega-3 fatty acids and antioxidants. Known to improve brain health and reduce inflammation. Often used in baking, snacking, or added to salads.' },
  //   { id: 4, name: 'Cashew (काजू)', image: 'Cashew.jpeg', desc: 'Cashews are crescent-shaped, creamy nuts with a buttery flavor. They are rich in magnesium, iron, and healthy fats.Popular in both sweet and savory dishes across cultures. They also help boost energy and support bone health.' },
  //   { id: 5, name: 'Raisins (किशमिश)', image: 'raisin.jpeg', desc: 'Peanuts are affordable legumes often mistaken for nuts. They are a protein-rich snack, ideal roasted or boiled. Packed with niacin, they support brain health. Used in everything from snacks to peanut butter.' },
  //   { id: 6, name: 'Dates (खजूर)', image: 'dates.jpeg', desc: 'Peanuts are affordable legumes often mistaken for nuts. They are a protein-rich snack, ideal roasted or boiled. Packed with niacin, they support brain health. Used in everything from snacks to peanut butter.' },
  // ];


  // const Spices = [
  //   { id: 7, name: 'Turmeric (हल्दी)', image: 'Turmeric.jpeg', desc: 'Cashews are crescent-shaped, creamy nuts with a buttery flavor. They are rich in magnesium, iron, and healthy fats. Popular in both sweet and savory dishes across cultures. They also help boost energy and support bone health.' },
  //   { id: 8, name: 'Red Chili Powder (लाल मिर्च पाउडर)', image: 'Red Chili Powder.jpeg', desc: 'Cashews are crescent-shaped, creamy nuts with a buttery flavor. They are rich in magnesium, iron, and healthy fats. Popular in both sweet and savory dishes across cultures. They also help boost energy and support bone health.' },
  //   { id: 9, name: 'Coriander Powder (धनिया पाउडर)', image: 'nuts.jpeg', desc: 'Walnuts have a brain-like shape and a mildly bitter earthy taste. They are a great source of omega-3 fatty acids and antioxidants. Known to improve brain health and reduce inflammation. Often used in baking, snacking, or added to salads.' },
  //   { id: 10, name: 'Cumin Seeds (जीरा)', image: 'Cashew.jpeg', desc: 'Cashews are crescent-shaped, creamy nuts with a buttery flavor. They are rich in magnesium, iron, and healthy fats.Popular in both sweet and savory dishes across cultures. They also help boost energy and support bone health.' },
  //   { id: 11, name: 'Cinnamon (दालचीनी)', image: 'raisin.jpeg', desc: 'Peanuts are affordable legumes often mistaken for nuts. They are a protein-rich snack, ideal roasted or boiled. Packed with niacin, they support brain health. Used in everything from snacks to peanut butter.' },
  // ];

  const dryFruit = [
    { id: 1, name: 'बदाम (Almonds)', image: 'almod.jpeg', desc: 'बदाम हे कुरकुरीत आणि पौष्टिक सुकामेवा आहेत. हे मॅग्नेशियम, आयर्न आणि हेल्दी फॅट्सने भरलेले असतात. मेंदूच्या कार्यासाठी उपयुक्त असून, गोड आणि तिखट पदार्थांमध्ये वापरले जातात.'},
    {id: 2, name: 'पिस्ता (Pista)', image: 'Cash.png', desc: 'पिस्ता हा स्वादिष्ट आणि पौष्टिक सुकामेवा आहे. त्यामध्ये फायबर्स, अँटीऑक्सिडंट्स आणि हेल्दी फॅट्स असतात. तो त्वचेसाठी आणि हृदयासाठी फायदेशीर असतो.'},
    {id: 3, name: 'अखरोट (Walnuts)', image: 'nuts.jpeg', desc: 'अखरोटाचा मेंदूसारखा आकार आणि सौम्य चव असते. हे ओमेगा-३ फॅटी अ‍ॅसिड्स आणि अँटीऑक्सिडंट्सचा समृद्ध स्रोत आहेत. मेंदूच्या आरोग्यासाठी उपयुक्त आणि जळजळ कमी करण्यास मदत करतात.'},
    {id: 4, name: 'काजू (Cashew)', image: 'Cashew.jpeg', desc: 'काजू हे अर्धचंद्राकृती, क्रीमी आणि बटरसारख्या चव असलेले सुकामेवा आहेत. हे मॅग्नेशियम, आयर्न आणि हेल्दी फॅट्सने समृद्ध आहेत. ऊर्जा वाढवतात आणि हाडांच्या आरोग्यासाठी फायदेशीर असतात.'},
    { id: 5, name: 'किशमिश (Raisins)', image: 'raisin.jpeg', desc: 'किशमिश गोड, सुकवलेल्या द्राक्षांपासून बनवले जातात. ते आयर्न, फायबर्स आणि अँटीऑक्सिडंट्सने भरलेले असतात. पचन सुधारतात आणि त्वचेसाठी फायदेशीर असतात.'},
    { id: 6, name: 'खजूर (Dates)', image: 'dates.jpeg', desc: 'खजूर हे नैसर्गिक गोडवा असलेले फल आहेत. ते फायबर्स, पोटॅशियम आणि अँटीऑक्सिडंट्सने समृद्ध असतात. ऊर्जा वाढवतात आणि पचनास मदत करतात.'},
  ];


  const Spices = [
    {id: 7, name: 'हळद (Turmeric)', image: 'Turmeric.jpeg', desc: 'हळद ही एक औषधी मसाला आहे. ती जळजळ कमी करण्यासाठी आणि रोगप्रतिकारशक्ती वाढवण्यासाठी ओळखली जाते. सूप, भाज्या आणि सौंदर्यप्रसाधनांमध्ये वापरली जाते.' },
    { id: 8, name: 'लाल मिरची पावडर (Red Chili Powder)', image: 'Red Chili Powder.jpeg', desc: 'लाल मिरची पावडर तिखटपणासाठी प्रसिद्ध आहे. ती अन्नाला चव आणि रंग देते. हृदय व पचनक्रियेच्या आरोग्यास उपयुक्त असते.'},
    { id: 9, name: 'धने पावडर (Coriander Powder)',image: 'coirander powder.png', desc: 'धने पावडर अन्नाला स्वादिष्ट चव देते. ती पचनास मदत करते आणि उष्णतेपासून संरक्षण करते. अनेक मसाल्यांमध्ये ती महत्त्वाचा घटक असते.'},
    { id: 10, name: 'जिरे (Cumin Seeds)', image: 'Cumin Seeds.png', desc: 'जिरे हे सुगंधी मसाले आहेत. ते पचन सुधारण्यास आणि गॅस कमी करण्यास मदत करतात. फोडणीसाठी आणि पदार्थात चव वाढवण्यासाठी वापरले जातात.'},
    { id: 11, name: 'दालचिनी (Cinnamon)',image: 'Cinnamon.png',desc: 'दालचिनी गोडसर चव असलेला सुगंधी मसाला आहे. ती रक्तातील साखर नियंत्रित करण्यास मदत करते. विविध गोड पदार्थांमध्ये वापरली जाते.'},
    // { id: 12, name: 'लवंग (Clove)', image: 'Clove.png', desc: 'लवंग हे तीव्र स्वादाचे आणि सुगंधी मसाले आहेत. ते दातदुखीवर उपयोगी पडतात आणि रोगप्रतिकारशक्ती वाढवतात. चहा, पुलाव व मिठाईत वापरले जातात.' }

  ];


  

  const handleClick = (item) => {
    localStorage.setItem("selectedProduct", JSON.stringify(item));
    router.push(`/dry-fruit/${item.id}`);
  };

  return (
    <>
     <div className='container'>
      
       <p className="text-[22px] sm:text-[24px] md:text-[30px] !text-center !mb-4 underline">🥜 Dry Fruits (सूखे मेवे)</p>
       <hr />
      {/* <h2 className='!text-center !mb-4 underline'>Our Dry Fruits</h2> */}
      <div className="row text-center justify-center">
        {dryFruit.map((item, index) => (
          <div className="col-6 col-lg-3 lg:mb-[48px] text-center" key={index}>
            <div className="shadow-sm rounded-sm text-center inline-block" onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
              <Image src={`/Images/${item.image}`} alt={item.name} width={300} height={100} />
              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-center p-2 !text-black">{item.name}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className='container'>
       <p className="text-[22px] sm:text-[24px] md:text-[30px] !text-center !mb-4  !mt-2 underline"> 🌶️ Masale / Spices (मसाले)</p>
       <hr />

      <div className="row text-center justify-center">
        {Spices.map((item, index) => (
          <div className="col-6 col-lg-3 lg:mb-[48px] text-center" key={index}>
            <div className="shadow-sm rounded-sm text-center inline-block" onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
              <Image src={`/Images/${item.image}`} alt={item.name} width={300} height={100} />
              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-center p-2 !text-black">{item.name}</p>              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
   
  )
}

export default Product;

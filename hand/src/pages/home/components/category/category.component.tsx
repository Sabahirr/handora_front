import qadin from '../../../../assets/image/statics/qadin.png'
import kisi from '../../../../assets/image/statics/kisi.png'
import usaq from '../../../../assets/image/statics/usaq.png'
import aksesuar from '../../../../assets/image/statics/aksesuar.png'
import aksesuarr from '../../../../assets/image/statics/aksesuar.png'
import { useCategoryStyle } from './category.styles'
const CategoryComponent = () => {

  const images = [qadin, kisi, usaq, aksesuar,aksesuarr];

  const classes=useCategoryStyle()

  return (
    <div className='mx-auto max-w-7xl px-4 py-16'>
      <h1 className={`text-3xl font-bold mb-8 ${classes.header}`}>Kateqoriyalar</h1>
  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          images.map((imgSrc: string, index: number) => {
            return (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300  cursor-pointer">
                <img 
                  src={imgSrc} 
                  alt={`category-${index}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default CategoryComponent;
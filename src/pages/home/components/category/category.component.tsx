import qadin from '../../../../assets/image/statics/qadin.png'
import kisi from '../../../../assets/image/statics/kisi.png'
import usaq from '../../../../assets/image/statics/usaq.png'
import aksesuar from '../../../../assets/image/statics/aksesuar.png'


const CategoryComponent = () => {
const img =[qadin,kisi,usaq,aksesuar]

  return (
        <div className='mx-auto max-w-7xl px-4 py-16'>
            <h1>Category</h1>
            <div>
                {
                    img.map((e:string)=>{
                        return <img src={e} alt="" />
                    })
                }
            </div>
            
        </div>
  );
};

export default CategoryComponent;
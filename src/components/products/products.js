import React from 'react';
import classes from './products.module.css';


const Products= ()=>{

return(
    <section className={classes.products}>
   <header className={classes.products_header}>
         <h2 className={classes.sectionTitle}>EXPERTISE.</h2>
         <div className={classes.products__header__paragraph}>
        <p className={classes.sectionSubTitle}>We pride ourselves for having access to China's best manufacturers for the following product categories.</p>
         </div>
         </header>
        <div className={classes.products__content}>
        {productData.map(product=>(
             <article className={classes.product_box}>
                 <h4 className={classes.product_header}>{product.heading}</h4>
                 <div className={classes.product_desc}>
                 <p className={classes.desc_text}>{product.description}</p>
                 </div>
             </article>
        ))}
        </div>

    </section>
)
}

export default Products

   



const productData=  [
    {
        id:"0",
        heading:'furniture',
        description:'Secure Imex sources furniture for wholesalers, retail stores and furniture for home use. We will help you get quality furniture from the best chinese suppliers at very low prices. Furniture categories include:',
        list:['Home furniture','Office furniture','Ratton furniture, umbrellas, coffee tables','Pool-side furniture.','e.t.c']
   },
   {
    id:"1",
    heading:'machinery',
    description:'Complete production lines, packaging machines, agricultural machinery, both large and small scale are major product categories for secure Imex. We have access to a range of quality manufacturers producing:',
    list:['Complete food production lines.','plastic recycling machines.','PVC pipe production lines.','Rice processing machines (mills, harvester, sorter)','Packaging machines.','e.t.c']
},
{
    id:"2",
    heading:'home appliances',
    description:'Are you looking to buy home appliances for personal use or resale? Secure Imex will help you source quality appliances at the most competitive prices. We can also help you get your special designs produced or brand products to your specification',
    list:['Lighting','Home electronics','Decorative items.','e.t.c']
},
{
    id:"3",
    heading:'sports',
    description:'Sports and entertainment equipments for both indoor and outdoor are also a major category for Secure imex. We have access to quality manufacturers producing',
    list:['Gym equipments','Commercial pool tables','Ping pong tables','Arcade games','Trampoline parks','e.t.c']
},
{
    id:"4",
    heading:'food equipments',
    description:'Secure Imex helps you source quality food equipments for restaurants, ice-cream / coffee shops. Bakeries both for commercial use or retail. Products include: ',
    list:['Commercial gas cooker','Commercial oven','industrial deep fryer','Ice cream machines','Display freezer','Slush machines','Industrial freezer','Commercial Mixer, Dryer.','e.t.c']
}
] 
